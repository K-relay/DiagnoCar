import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class SplashScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Use Future.delayed to wait for 3 seconds
    // Future.delayed(Duration(seconds: 3), () {
      _checkAccessToken(context);
    // });

    // Your splash screen UI here
    return Scaffold(
      body: Center(
        // child: Column(
        //   mainAxisAlignment: MainAxisAlignment.center,
        //   children: [
        //     Image.asset(
        //       'assets/images/splash_image.png',
        //       width: 250, // Set the desired width
        //       height: 265, // Set the desired height
        //     ),
        //     SizedBox(height: 20),
        //   ],
        // ),
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
