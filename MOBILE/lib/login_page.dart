import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:connectivity/connectivity.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      themeMode: ThemeMode.system, // Use ThemeMode.dark for always dark mode, and ThemeMode.light for always light mode
      // initialRoute: '/', // Set initial route
      // routes: {
      //   '/': (context) => LoginScreen(),
      //   '/change_password': (context) => ChangePasswordScreen(), // Register route for ChangePasswordScreen
      // },
    );
  }
}

class LoginScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Login',
          style: TextStyle(color: Colors.white),
        ),
        centerTitle: true,
        backgroundColor: Colors.blue,
        elevation: 0,
        automaticallyImplyLeading: false,
        shape: ContinuousRectangleBorder(
          borderRadius: BorderRadius.only(
            bottomLeft: Radius.circular(40.0),
            bottomRight: Radius.circular(40.0),
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.all(16.0),
          child: LoginWidget(),
        ),
      ),
    );
  }
}

class LoginWidget extends StatefulWidget {
  @override
  _LoginWidgetState createState() => _LoginWidgetState();
}

class _LoginWidgetState extends State<LoginWidget> {
  final _formKey = GlobalKey<FormState>();
  bool _isObscured = true;
  TextEditingController _usernameController = TextEditingController();
  TextEditingController _passwordController = TextEditingController();
  bool _isLoggingIn = false;
  final _storage = FlutterSecureStorage();

  Future<void> _login() async {
    if (_isLoggingIn) {
      return;
    }

    setState(() {
      _isLoggingIn = true;
    });

    final String apiUrl = 'http://51.20.138.46/account/api/token/';

    try {
      final response = await http.post(
        Uri.parse(apiUrl),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'username': _usernameController.text,
          'password': _passwordController.text,
        }),
      );

      if (response.statusCode == 200) {
        final dynamic responseBody = response.body != null
            ? json.decode(response.body)
            : null;

        if (responseBody != null && responseBody is Map<String, dynamic>) {
          if (responseBody.containsKey('access')) {
            final accessToken = responseBody['access'];
            print('Access Token: $accessToken');

            await _storage.write(key: 'access_token', value: accessToken);

            Navigator.pushReplacementNamed(context, '/Home', arguments: {
              'accessToken': responseBody['access'],
              'refreshToken': responseBody['refresh_token'],
            });

            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                content: Center(
                  child: Text(
                    'چوونە ژووەرەوە سەرکەوتوو بوو.',
                    style: TextStyle(fontFamily: "NRT"),
                  ),
                ),
                duration: Duration(seconds: 3),
              ),
            );

            // This line is optional; it's for debugging purposes
            final storedAccessToken = await _storage.read(key: 'access_token');
            print('Stored Access Token: $storedAccessToken');
          } else {
            print('Access Token not found in the response body');
          }
        }
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Center(
              child: Text(
                'Error: ${response.reasonPhrase}',
                style: TextStyle(fontFamily: "NRT"),
              ),
            ),
            duration: Duration(seconds: 3),
          ),
        );

        print('Error: ${response.reasonPhrase}');
      }
    } catch (e) {
      // Tell you internal server error
      print('Error: $e');
    } finally {
      await Future.delayed(Duration(seconds: 3));

      setState(() {
        _isLoggingIn = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Container(
        margin: EdgeInsets.only(top: 60.0),
        child: Container(
          padding: EdgeInsets.all(16.0),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10.0),
            color: Theme.of(context).scaffoldBackgroundColor,
            boxShadow: [
              BoxShadow(
                color: Colors.grey.withOpacity(0.5),
                spreadRadius: 5,
                blurRadius: 7,
                offset: Offset(0, 3),
              ),
            ],
          ),
          child: Form(
            key: _formKey,
            child: Directionality(
              textDirection: TextDirection.rtl,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(
                    Icons.account_circle,
                    size: 100.0,
                    color: Colors.blue,
                  ),
                  SizedBox(height: 20.0),
                  TextFormField(
                    controller: _usernameController,
                    decoration: InputDecoration(
                      labelText: 'ناوی بەکارهێنەر',
                      prefixIcon: Icon(Icons.person),
                      border: OutlineInputBorder(),
                    ),
                    validator: (value) =>
                        value?.isEmpty ?? true ? 'تکایە ناوی بەکارهێنەر بنووسە' : null,
                  ),
                  SizedBox(height: 20.0),
                  TextFormField(
                    controller: _passwordController,
                    obscureText: _isObscured,
                    decoration: InputDecoration(
                      labelText: ' وشەی تێپەڕ',
                      prefixIcon: Icon(Icons.lock),
                      suffixIcon: IconButton(
                        icon: Icon(
                          _isObscured ? Icons.visibility : Icons.visibility_off,
                        ),
                        onPressed: () {
                          setState(() {
                            _isObscured = !_isObscured;
                          });
                        },
                      ),
                      border: OutlineInputBorder(),
                    ),
                    validator: (value) =>
                        value?.isEmpty ?? true ? 'تکایە وشەی تێپەڕ بنووسە' : null,
                  ),
                  SizedBox(height: 20.0),
                  if (_isLoggingIn)
                    CircularProgressIndicator(
                      color: Colors.blue,
                    ),
                ElevatedButton(
  onPressed: _isLoggingIn
      ? null
      : () async {
          if (_formKey.currentState?.validate() ?? false) {
            var connectivityResult =
                await (Connectivity().checkConnectivity());

            if (connectivityResult == ConnectivityResult.none) {
              ScaffoldMessenger.of(context).showSnackBar(
                SnackBar(
                  content: Center(
                    child: Text(
                      'ئینتەرنێت بەردەست نییە',
                      style: TextStyle(fontFamily: "NRT"),
                    ),
                  ),
                  duration: Duration(seconds: 3),
                  backgroundColor: Colors.red,
                ),
              );
            } else {
              _login();
            }
          }
        },
  style: ButtonStyle(
    backgroundColor: MaterialStateProperty.all<Color>(Colors.blue), // Background color set to blue
    foregroundColor: MaterialStateProperty.all<Color>(Colors.white), // Text color set to white
  ),
  child: Text(
    'چوونەژوورەوە',
    style: TextStyle(fontFamily: 'NRT', fontSize: 18),
  ),
),

                  SizedBox(height: 10.0),
                  
               ElevatedButton(
  onPressed: () {
    Navigator.pushNamed(context, '/Signup');
  },
  style: ButtonStyle(
    backgroundColor: MaterialStateProperty.all<Color>(Colors.blue), // Background color set to blue
    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
      RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(100), // Border radius set to a large value to create a circle
      ),
    ),
  ),
  child: Text(
    'دروستکردنی هەژمار',
    style: TextStyle(
      fontFamily: 'NRT',
      fontSize: 18,
      // fontWeight: FontWeight.bold,
      color: Colors.white, // Text color set to white
    ),
  ),
),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
