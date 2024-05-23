import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'navigations_bar.dart';

class MyContactPage extends StatelessWidget {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  MyContactPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: Text('پەیوەندی', style: TextStyle(color: Colors.white)),
        centerTitle: true,
       leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pushReplacementNamed(context, '/Home');
          },
        ),
        
        iconTheme: IconThemeData(color: Color.fromARGB(255, 252, 251, 251)),

         shape: ContinuousRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(40.0),
          bottomRight: Radius.circular(40.0),
        ),
      ),
      ),
      endDrawer: MyEndDrawer(
        onThemeChanged: (bool) {},
      ),
      body: CustomDrawerContent(),
    );
  }
}

class CustomDrawerContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(top: 0.0),
      child: SingleChildScrollView(
        child: Column(
          children: [
            TitleSection(),
            SizedBox(height: 8),
            ImageSection(),
            SectionTitle("دەربارەی بەرنامە"),
            ProgramContent(),
            SizedBox(height: 8),
            AdditionalSection(" بۆ پەیوەندی کردن"),
            SizedBox(height: 8),
          ],
        ),
      ),
    );
  }
}

class AdditionalSection extends StatelessWidget {
  final String title;

  AdditionalSection(this.title);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SectionTitle(title),
        TelegramButton(),
      ],
    );
  }
}

class TelegramButton extends StatelessWidget {
  _launchTelegram() async {
    String username = "rasty_khalel876";
    String url = "https://t.me/$username";

    try {
      await launch(url);
    } catch (e) {
      print("Error launching Telegram: $e");
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 8.0, vertical: 8.0),
      child: Card(
        color: Colors.amber,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10.0),
        ),
        child: InkWell(
          onTap: _launchTelegram,
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center, // Center the icon and text
              children: [
                Icon(
                  Icons.phone,
                  color: Colors.white,
                ),
                SizedBox(width: 16),
                Text(
                  "07702208508",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}




class TitleSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Align(
      child: Container(
        padding: const EdgeInsets.all(0),
        decoration: BoxDecoration(
          border: Border(bottom: BorderSide(color: Colors.blue, width: 2.0)),
          borderRadius: BorderRadius.circular(10),
        ),
        child: const Text(
          "پەیوەندیکردن بە دروستکەرانی پڕۆگرام",
          style: TextStyle(
            color: Colors.black,
            fontWeight: FontWeight.w600,
            fontSize: 20,
          ),
          textDirection: TextDirection.rtl,
        ),
      ),
    );
  }
}

class ImageSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(top: 0),
      child: SizedBox(
        child: Image.asset(
          'assets/images/code_relay.png',
          width: 250,
          height: 250,
        ),
      ),
    );
  }
}

class SectionTitle extends StatelessWidget {
  final String title;

  SectionTitle(this.title);

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Padding(
        padding: EdgeInsets.only(top: 0.0, right: 10.0),
        child: Align(
          alignment: Alignment.centerRight,
          child: Text(
            title,
            textDirection: TextDirection.rtl,
            style: TextStyle(
              color: Colors.blue,
              fontWeight: FontWeight.bold,
              fontSize: 20,
            ),
          ),
        ),
      ),
    );
  }
}

class ProgramContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 8.0, vertical: 8.0),
      child: Container(
        decoration: BoxDecoration(
          color: Colors.grey[300],
          borderRadius: BorderRadius.circular(10.0),
        ),
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Text(
            "ئێمە وەک و ستافی کۆد ڕیلەی کە ژمارەمان ٤ کەسە هەستاین بە دروستکردنی ئەم ئەپڵیکەیشنە و لە داهاتوودا  ئەپڵیکەیشنی تریشمان دەبێت، بۆ زانیاری زیاتر و وەڵامی پرسیارەکانتان دەتوانن سەردانی سۆشیاچاژمیدیاکانمان بکەن یاوەخود پەیوەندی بکەن بە ژمارە موبایلی ستافی کۆد ڕیلەی",
            textAlign: TextAlign.justify,
            textDirection: TextDirection.rtl,
            style: TextStyle(
              fontSize: 16,
            ),
          ),
        ),
      ),
    );
  }
}
