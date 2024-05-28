import 'package:flutter/material.dart';
import 'screens/notifications.dart';
import 'screens/feedBack.dart';
import 'auth/login_page.dart';
import 'auth/createaccount.dart';
import 'screens/homepage.dart';
import 'screens/contact.dart';
import 'screens/ServiceScreen.dart';
import 'utils/package.dart';
import 'ui/slider.dart';
import 'screens/MapScreen.dart';
import 'screens/SearchPage.dart';
import 'screens/allServiceClass.dart';
import 'screens/splash_screen.dart';
import 'screens/postDetailes.dart';
import 'auth/change_password.dart';
import 'auth/CheckPermmision.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Diagno',
      // theme: _buildLightTheme(),
      // darkTheme: _buildDarkTheme(),
      // themeMode: ThemeMode.system, // Automatically switch based on system theme
      debugShowCheckedModeBanner: false,
      initialRoute: '/', // Set your initial route if needed
      routes: {
        '/': (context) => SplashScreen(),
        '/package': (context) => PackageScreen(),
        '/Slider': (context) => SliderPage(),
                '/Check': (context) => CheckPermission(),

        '/Login': (context) => LoginScreen(),
        '/Signup': (context) => SignupScreen(),
        '/Home': (context) => HomeScreen(),
        '/Contact': (context) => MyContactPage(),
        // '/Service': (context) => Service(),
        // '/FeedBack': (context) => FeedbackPage(),//krawa ba comment codakany la estaya bardast nya
        '/Map': (context) => MapPage(),
        
        '/Search': (context) => SearchScreen(),
        '/detail': (context) {
          var postId2;
          var image2;
          return DetailScreen(
            title: '',
            postId: postId2,
            image: image2,
            paragraph: '',
            time: '',
          );
        },
        
        '/change_password': (context) => ChangePasswordScreen(),
        '/notifications': (context) => NotificationPage(),
      },
    );
  }





}

