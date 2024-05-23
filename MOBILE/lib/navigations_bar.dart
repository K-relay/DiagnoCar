import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'logout.dart';

class MyEndDrawer extends StatefulWidget {
  final Function(bool) onThemeChanged;

  MyEndDrawer({required this.onThemeChanged});

  @override
  _MyEndDrawerState createState() => _MyEndDrawerState();
}

class _MyEndDrawerState extends State<MyEndDrawer> {
  final _secureStorage = FlutterSecureStorage();
  bool isDarkMode = false;

  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Container(
        width: MediaQuery.of(context).size.width * 0.4,
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            DrawerHeader(
              decoration: BoxDecoration(
                color: isDarkMode ? Colors.black : Colors.blue,
              ),
              child: ClipRect(
                child: Align(
                  alignment: Alignment.center,
                  child: Image.asset(
                    'assets/images/car.png',
                    width: 220.0,
                    height: 100.0,
                    fit: BoxFit.cover,
                    color: Colors.white,
                  ),
                ),
              ),
            ),
            buildListTile(
              context,
              title: 'سەرەتا',
              icon: Icons.home,
              route: '/Home',
            ),
            buildListTile(
              context,
              title: 'گەڕان',
              icon: Icons.search,
              route: '/Search',
            ),
            // buildListTile(
            //   context,
            //   title: 'خزمەتگوزاری',
            //   icon: Icons.home_repair_service,
            //   route: '/Service',
            // ),
            buildListTile(
              context,
              title: 'خزمەتگوزاری لەسەر نەخشە',
              icon: Icons.map_outlined,
              route: '/Map',
            ),
            buildListTile(
              context,
              title: 'پەیوەندیکردن',
              icon: Icons.phone,
              route: '/Contact',
            ),
            // buildListTile(
            //   context,
            //   title: 'ڕاو سەرنج لەسەر بەرنامە',
            //   icon: Icons.feedback_outlined,
            //   route: '/FeedBack',
            // ),
             buildListTile(
              context,
              title: 'پاکێجەکان',
              icon: Icons.feedback_outlined,
              route: '/package',
            ),
             buildListTile(
              context,
              title:'گۆڕینی تێپەڕە وشە',

              icon: Icons.change_circle,

              route: '/change_password',
            ),
            buildExitTile(context),
            ListTile(
              trailing: Switch(
                value: isDarkMode,
                onChanged: (value) {
                  setState(() {
                    isDarkMode = value;
                    _toggleTheme();
                  });
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget buildListTile(BuildContext context,
      {required String title, required IconData icon, required String route}) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: isDarkMode ? Colors.white : Colors.blue.withOpacity(0.5)),
        color: isDarkMode ? Colors.black : Colors.white,
        boxShadow: [
          BoxShadow(
            color: isDarkMode ? Colors.grey.withOpacity(0.6) : Colors.grey.withOpacity(0.3),
            spreadRadius: 2,
            blurRadius: 5,
            offset: Offset(0, 3),
          ),
        ],
      ),
      margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
      child: ListTile(
        title: Align(
          alignment: Alignment.centerRight,
          child: Text(
            title,
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: isDarkMode ? Colors.white : Colors.black,
              fontFamily: 'NRT',
            ),
          ),
        ),
        trailing: Icon(
          icon,
          color: isDarkMode ? Colors.white : Colors.black,
          size: 24,
        ),
        onTap: () {
          Navigator.pop(context);
          Navigator.pushReplacementNamed(context, route);
        },
      ),
    );
  }

  Widget buildLogoutTile(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: isDarkMode ? Colors.white : Colors.blue.withOpacity(0.5)),
        color: isDarkMode ? Colors.black : Colors.white,
        boxShadow: [
          BoxShadow(
            color: isDarkMode ? Colors.grey.withOpacity(0.6) : Colors.grey.withOpacity(0.3),
            spreadRadius: 2,
            blurRadius: 5,
            offset: Offset(0, 3),
          ),
        ],
      ),
      margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
    );
  }

  Widget buildExitTile(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(10),
        border: Border.all(color: isDarkMode ? Colors.white : Colors.blue.withOpacity(0.5)),
        color: isDarkMode ? Colors.black : Colors.white,
        boxShadow: [
          BoxShadow(
            color: isDarkMode ? Colors.grey.withOpacity(0.6) : Colors.grey.withOpacity(0.3),
            spreadRadius: 2,
            blurRadius: 5,
            offset: Offset(0, 3),
          ),
        ],
      ),
      margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
      child: ListTile(
        title: Align(
          alignment: Alignment.centerRight,
          child: Text(
            'چوونە دەرەوە',
            style: TextStyle(
              fontWeight: FontWeight.bold,
              color: isDarkMode ? Colors.white : Colors.black,
              fontFamily: 'NRT',
            ),
          ),
        ),
        trailing: Icon(
          Icons.exit_to_app,
          color: isDarkMode ? Colors.white : Colors.black,
          size: 24,
        ),
        onTap: () => _showExitDialog(context),
      ),
    );
  }

  void _showExitDialog(BuildContext context) {
    ExitDialog exitDialog = ExitDialog(context);
    exitDialog.showExitDialog();
  }

  void _toggleTheme() {
    final Brightness newBrightness =
        isDarkMode ? Brightness.dark : Brightness.light;

    widget.onThemeChanged(isDarkMode);
  }
}

