import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class ExitDialog {
  final BuildContext context;
  final FlutterSecureStorage _secureStorage = FlutterSecureStorage();

  ExitDialog(this.context);

  void showExitDialog() {
    // ThemeData theme = ThemeClass.darkTheme; // Get the dark theme from your theme class

    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          // backgroundColor: theme.scaffoldBackgroundColor, // Set background color to scaffold background color of the dark theme
          content: Text(
            'دڵنیایت کە ئەتەوێت بچیتە دەرەوە؟',
            style: TextStyle(
              fontSize: 16,
              fontFamily: "NRT",
              color: Colors.blue, // Set text color to blue
            ),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(false);
              },
              child: Text(
                'نەخێر',
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.red, // Change color as desired
                  fontFamily: "NRT",
                ),
              ),
            ),
            TextButton(
              onPressed: () async {
                await _secureStorage.delete(key: 'access_token');
                Navigator.of(context).pop(true);
              },
              child: Text(
                'چوونە دەرەوە',
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.green, // Change color as desired
                  fontFamily: "NRT",
                ),
              ),
            ),
          ],
        );
      },
    ).then((value) {
      if (value == true) {
        Navigator.popAndPushNamed(context, '/Login');
      }
    });
  }
}
