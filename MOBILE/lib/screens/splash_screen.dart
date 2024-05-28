import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class SplashScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
   
      _checkAccessToken(context);
   
    return Scaffold(
      body: Center(
       
      ),
    );
  }

  // New method to check access token
  Future<void> _checkAccessToken(BuildContext context) async {
    final storedAccessToken = await FlutterSecureStorage().read(key: 'access_token');

    if (storedAccessToken != null && storedAccessToken.isNotEmpty) {
      // Access token exists, navigate to login page
      Navigator.pushReplacementNamed(context, '/Home');
    } else {
      // Access token does not exist, navigate to slider page
      Navigator.pushReplacementNamed(context, '/Slider');
    }
  }
}
