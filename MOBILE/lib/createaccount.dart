import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/services.dart';
import 'package:connectivity/connectivity.dart';

class SignupScreen extends StatefulWidget {
  const SignupScreen({Key? key}) : super(key: key);

  @override
  _CreateState createState() => _CreateState();
}

class _CreateState extends State<SignupScreen> {
  TextEditingController _firstNameController = TextEditingController();
  TextEditingController _lastNameController = TextEditingController();
  TextEditingController _phoneNumberController = TextEditingController();
  TextEditingController _emailController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'درووستکردنی هەژمار',
          style: TextStyle(fontSize: 23, color: Colors.white),
        ),
        centerTitle: true,
        backgroundColor: Colors.blue,
        iconTheme: IconThemeData(color: Color.fromARGB(255, 252, 251, 251)),

        //radius
         shape: ContinuousRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(40.0),
          bottomRight: Radius.circular(40.0),
        ),
      ),
      ),
      body: Container(
        margin: EdgeInsets.all(16.0),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10.0),
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.5),
              spreadRadius: 5,
              blurRadius: 7,
              offset: Offset(0, 3),
            ),
          ],
        ),
        child: SingleChildScrollView(
          child: Form(
            key: _formKey,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SizedBox(height: 10),
                Center(
                  child: Padding(
                    padding: const EdgeInsets.only(bottom: 60),
                    child: Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        border: Border(bottom: BorderSide(color: Colors.blue, width: 2.0)),
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: const Text(
                        'زانیاری هەژمار',
                        style: TextStyle(
                          color: Colors.black,
                          fontWeight: FontWeight.w600,
                          fontSize: 22,
                        ),
                      ),
                    ),
                  ),
                ),
                buildTextField('ناوی یەکەم', 'First Name', _firstNameController, Icons.person),
                buildTextField('ناوی دووەم', 'Last Name', _lastNameController, Icons.person),
                buildTextField('ناوی بەکارهێنەر', 'Username', _firstNameController, Icons.person),
                buildTextField(
                  'وشەی تێپەڕ',
                  'Password',
                  _passwordController,
                  Icons.lock,
                  isPassword: true,
                ),
                buildTextField('ڕەقەم موبایل', 'Phone Number', _phoneNumberController, Icons.phone, isPhoneNumber: true),
                buildTextField('ئیمێڵ', 'Email', _emailController, Icons.email),
                
               ElevatedButton(
  onPressed: () async {
    var connectivityResult = await (Connectivity().checkConnectivity());

    if (connectivityResult == ConnectivityResult.none) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Center(
            child: Text(
              'ئینتەرنێت بەردەست نییە',
              style: TextStyle(fontFamily: "NRT", color: Colors.white),
            ),
          ),
          duration: Duration(seconds: 3),
          backgroundColor: Colors.red, // Set the background color to red
        ),
      );
    } else {
      if (_formKey.currentState!.validate()) {
        _signup();
      }
    }
  },
  style: ButtonStyle(
    backgroundColor: MaterialStateProperty.all<Color>(Colors.blue), // Set the background color to blue
  ),
  child: Text(
    'درووستکردنی هەژمار',
    style: TextStyle(
      fontFamily: 'NRT',
      fontSize: 18, // Adjust the font size as needed
      // fontWeight: FontWeight.bold, // You can change the fontWeight
      color: Colors.white, // Change the color to white
      // You can add more styles like letterSpacing, decoration, etc.
    ),
  ),
),

                SizedBox(height: 20,)
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget buildTextField(
    String labelText,
    String hintText,
    TextEditingController controller,
    IconData icon,
    {bool isPassword = false, bool isPhoneNumber = false}
  ) {
    return Directionality(
      textDirection: TextDirection.rtl,
      child: Container(
        padding: const EdgeInsets.all(10),
        margin: const EdgeInsets.symmetric(vertical: 2),
        child: TextFormField(
          controller: controller,
          obscureText: isPassword,
          keyboardType: isPhoneNumber ? TextInputType.phone : TextInputType.text,
          inputFormatters: isPhoneNumber
              ? [FilteringTextInputFormatter.digitsOnly]
              : null,
          decoration: InputDecoration(
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
            ),
            labelText: labelText,
            hintText: hintText,
            prefixIcon: Icon(icon),
          ),
          validator: (value) {
            if (value == null || value.isEmpty) {
              return 'تکایە  $labelText بنووسە';
            }

            if (isPhoneNumber) {
              if (value.length != 11) {
                return 'Phone number must be 11 digits long';
              }

              if (!(value.startsWith('077') || value.startsWith('075'))) {
                return 'Phone number must start with 077 or 075';
              }
            }
            if (labelText == 'ئیمێڵ') {
              if (!RegExp(r"^[a-zA-Z0-9_.+-]+@(gmail\.com|yahoo\.com)$").hasMatch(value)) {
                return 'Please enter a valid Gmail or Yahoo email address';
              }
            }
            return null;
          },
        ),
      ),
    );
  }

  Future<void> _signup() async {
    final String apiUrl = 'http://51.20.138.46/account/register/';

    try {
      final response = await http.post(
        Uri.parse(apiUrl),
        headers: {
          'Content-Type': 'application/json',
        },
        body: json.encode({
          'first_name': _firstNameController.text,
          'last_name': _lastNameController.text,
          'username': _firstNameController.text,
          'password': _passwordController.text,
          'phoneNumber': _phoneNumberController.text,
          'email': _emailController.text,
        }),
      );

      print('Status Code: ${response.statusCode}');
      print('Response Body: ${response.body}');

      if (response.statusCode == 200) {
        _showConfirmationDialog();
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Center(child: Text('خۆتۆمارکردن سەرکەوتوو نەبوو',style: TextStyle(fontFamily: "NRT"),)),
            duration: Duration(seconds: 3),
          ),
        );
      }
    } catch (e) {
      print('Error: $e');
    }
  }
void _showConfirmationDialog() {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return AlertDialog(
        backgroundColor: Colors.green, // Change background color to green
        title: Text(
          'ئاگاداری',
          textAlign: TextAlign.right,
          style: TextStyle(color: Colors.white), // Change text color to white
        ),
        content: Text(
          'بەسەرکەوتووی ئەکاونتەکەت درووست بوو',
          style: TextStyle(color: Colors.white), // Change text color to white
        ),
        actions: <Widget>[
          ElevatedButton(
            onPressed: () {
              Navigator.of(context, rootNavigator: true).pop();
              _firstNameController.clear();
              _lastNameController.clear();
              _phoneNumberController.clear();
              _emailController.clear();
              _passwordController.clear();
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.blue, // Change button color to blue
            ),
            child: Center(
              child: Text(
                'باشە',
                style: TextStyle(color: Colors.white) // Change text color to white
              ),
            ),
          ),
          SizedBox(height: 10),
        ],
      );
    },
  );
}

}

void main() {
  runApp(MaterialApp(
    home: SignupScreen(),
  ));
}
