import 'package:diagno/navigation/navigations_bar.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class ChangePasswordScreen extends StatefulWidget {
  @override
  _ChangePasswordScreenState createState() => _ChangePasswordScreenState();
}

class _ChangePasswordScreenState extends State<ChangePasswordScreen> {
  TextEditingController _oldPasswordController = TextEditingController();
  TextEditingController _newPasswordController = TextEditingController();
  TextEditingController _confirmNewPasswordController = TextEditingController();
  final _storage = FlutterSecureStorage();

  Future<void> _changePassword(BuildContext context) async {
    final url = 'http://51.20.138.46/account/change_password/';
    final token = await _storage.read(key: 'access_token');

    final response = await http.post(
      Uri.parse(url),
      headers: {
        'Authorization': 'Bearer $token',
        'Content-Type': 'application/json',
      },
      body: json.encode({
        'old_password': _oldPasswordController.text,
        'new_password': _newPasswordController.text,
        'new_password1': _confirmNewPasswordController.text,
      }),
    );

    if (response.statusCode == 200) {
      // Password changed successfully
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Center(
            child: Text(
              'گۆڕینی تێپەڕە وشە سەرکەوتوو بوو',
              style: TextStyle(fontFamily: 'NRT'),
            ),
          ),
        ),
      );
      // You can navigate to another screen or show a success message here
    } else {
      // Failed to change password, show error message
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          backgroundColor: Colors.red, // Set background color to red
          content: Center(
            child: Text(
              'گۆڕینی تێپەڕە وشە سەرکەوتوو نەبوو. Status code: ${response.statusCode}',
              style: TextStyle(fontFamily: 'NRT'),
            ),
          ),
        ),
      );

      // You can show an error message to the user here
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'گۆڕینی تێپەڕە وشە',
          style: TextStyle(color: Colors.white, fontFamily: 'NRT'),
        ),
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pushReplacementNamed(context, '/Home');
          },
        ),
        centerTitle: true,
        backgroundColor: Colors.blue,
        iconTheme: IconThemeData(color: Color.fromARGB(255, 252, 251, 251)),
      ),
      endDrawer: MyEndDrawer(onThemeChanged: (bool ) {  },),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            TextField(
              controller: _oldPasswordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: 'Old Password',
                border: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.black), // Add black border color
                ),
                filled: true,
                fillColor: Colors.black.withOpacity(0.1), // Black with some opacity
                labelStyle: TextStyle(color: Colors.black), // Text color
                hintStyle: TextStyle(color: Colors.black), // Hint text color
              ),
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: _newPasswordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: 'New Password',
                border: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.black), // Add black border color
                ),
                filled: true,
                fillColor: Colors.black.withOpacity(0.1), // Black with some opacity
                labelStyle: TextStyle(color: Colors.black), // Text color
                hintStyle: TextStyle(color: Colors.black), // Hint text color
              ),
            ),
            SizedBox(height: 16.0),
            TextField(
              controller: _confirmNewPasswordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: 'Confirm New Password',
                border: OutlineInputBorder(
                  borderSide: BorderSide(color: Colors.black), // Add black border color
                ),
                filled: true,
                fillColor: Colors.black.withOpacity(0.1), // Black with some opacity
                labelStyle: TextStyle(color: Colors.black), // Text color
                hintStyle: TextStyle(color: Colors.black), // Hint text color
              ),
            ),
            SizedBox(height: 32.0),
            ElevatedButton(
              onPressed: () {
                // Check if passwords match and handle password change logic
                if (_newPasswordController.text == _confirmNewPasswordController.text) {
                  // Passwords match, initiate password change request
                  _changePassword(context);
                } else {
                  // Passwords don't match, show an error message
                  showDialog(
                    context: context,
                    builder: (BuildContext context) {
                      return AlertDialog(
                        title: Text('Error'),
                        content: Text('New passwords do not match.'),
                        actions: <Widget>[
                          TextButton(
                            onPressed: () {
                              Navigator.of(context).pop();
                            },
                            child: Text('OK'),
                          ),
                        ],
                      );
                    },
                  );
                }
              },
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all<Color>(Colors.blue),
                foregroundColor: MaterialStateProperty.all<Color>(Colors.white),
                padding: MaterialStateProperty.all<EdgeInsetsGeometry>(EdgeInsets.all(16.0)),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                ),
              ),
              child: Text(
                'گۆڕین',
                style: TextStyle(fontFamily: 'NRT'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
