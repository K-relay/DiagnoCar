import 'package:diagno/notifications.dart';
import 'package:flutter/material.dart';
import 'feedBack.dart';
import 'login_page.dart';
import 'createaccount.dart';
import 'homepage.dart';
import 'contact.dart';
import 'ServiceScreen.dart';
import 'package.dart';
import 'slider.dart';
import 'MapScreen.dart';
import 'SearchPage.dart';
import 'allServiceClass.dart';
import 'splash_screen.dart';
import 'postDetailes.dart';
import 'change_password.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Diagno',
      theme: ThemeData(
        // Define your app's theme here
      ),
      debugShowCheckedModeBanner: false,
      initialRoute: '/', // Set your initial route if needed
      routes: {
        '/': (context) => SliderPage(),
        '/package': (context) => PackageScreen(),
        '/Slider': (context) => SliderPage(),
        '/Login': (context) => LoginScreen(),
        '/Signup': (context) => SignupScreen(),
        '/Home': (context) => HomeScreen(),
        '/Contact': (context) => MyContactPage(),
        '/Service': (context) => Service(),
        '/FeedBack': (context) => FeedbackPage(),
        '/Map': (context) => MapPage(),
        '/Search': (context) => SearchScreen(),
        '/detail': (context) {
          var postId2 ;
          var image2 ;
          return DetailScreen(title: '', postId: postId2, image: image2, paragraph: '', time: '',);
        },

        //************************************* */
        '/beauty': (context) => BeautyService(),
        '/maintenance': (context) => MaintenanceService(),
        '/engine': (context) => EngineService(),
        '/smoke': (context) => SmokeService(),
        '/tire': (context) => TireService(),
        '/electricity': (context) => ElectricityService(),
        '/brake': (context) => BrakeService(),
        '/repeat': (context) => RepeatService(),

        //********************************************** */
        '/change_password': (context) => ChangePasswordScreen(),  
        '/notifications': (context) => NotificationPage(),
      },
    );
  }
}
