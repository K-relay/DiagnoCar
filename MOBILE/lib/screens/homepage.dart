import 'package:diagno/navigation/bottom_navigation_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../navigation/navigations_bar.dart';
import '../auth/logout.dart';
import 'notifications.dart';
import 'postDetailes.dart';

class HomeScreen extends StatelessWidget {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  final FlutterSecureStorage _secureStorage = FlutterSecureStorage();
  final ScrollController _scrollController = ScrollController();

  

  HomeScreen({Key? key}) : super(key: key);

  List<dynamic> posts = [];

//la eshm xst
  showExitDialog(BuildContext context) {
  showDialog(
    context: context,
    builder: (BuildContext context) {
      return AlertDialog(
       
      );
    },
  );
}

Future<bool> _onWillPop(BuildContext context) async {
  _showExitDialog(context);
  return false; // Don't pop until user confirms
}


  Future<void> _showExitDialog(BuildContext context) async {
    ExitDialog exitDialog = ExitDialog(context);
    exitDialog.showExitDialog();
  }

  Future<void> _fetchPosts() async {
    const String apiUrl = 'http://51.20.138.46/post/list';

    try {
      final response = await http.get(Uri.parse(apiUrl));

      if (response.statusCode == 200) {
        posts = json.decode(utf8.decode(response.bodyBytes));
        print(posts);
      } else {
        print('Failed to load posts: ${response.statusCode}');
      }
    } catch (error) {
      print('Error: $error');
    }
  }

  @override
  Widget build(BuildContext context) {
    return WillPopScope(
      onWillPop: () => _onWillPop(context),
      child: Scaffold(
        key: _scaffoldKey,
        appBar: buildAppBar(context),
        endDrawer: MyEndDrawer(
          onThemeChanged: (isDarkMode) {
            // Handle theme change in the home screen
          },
        ),
        body: FutureBuilder(
          future: _fetchPosts(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return Center(child: CircularProgressIndicator());
            } else if (snapshot.hasError) {
              return Center(child: Text('Error loading data'));
            } else {
              return HomeBody(posts: posts, scrollController: _scrollController);
            }
          },
        ),
        
     bottomNavigationBar: BottomNavigation(
        currentIndex: 0, // Provide currentIndex value
        onIndexChanged: (index) {
          // Handle index change
        },
      ),

        floatingActionButton: FloatingActionButton(
          onPressed: () {
            // Scroll to the top when the FAB is clicked
            _scrollController.animateTo(
              0,
              duration: Duration(milliseconds: 500),
              curve: Curves.easeInOut,
            );
          },
          child: Icon(Icons.arrow_upward),
        ),
      ),
    );
  }

  AppBar buildAppBar(BuildContext context) {
    return AppBar(
      title: Center(
        child: Text(
          'سەرەتا',
          style: TextStyle(color: Colors.white, fontFamily: 'NRT'),
        ),
      ),
      backgroundColor: Colors.blue,
      iconTheme: IconThemeData(color: Color.fromARGB(255, 252, 251, 251)),
      leading: IconButton(
        icon: Icon(Icons.arrow_back),
        onPressed: () async {
          await _showExitDialog(context);
        },
      ),
      actions: [
        Builder(
          builder: (context) => IconButton(
            icon: Icon(Icons.menu),
            onPressed: () {
              Scaffold.of(context).openEndDrawer();
            },
          ),
        ),
      ],
      shape: ContinuousRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(40.0),
          bottomRight: Radius.circular(40.0),
        ),
      ),
    );
  }
}

class HomeBody extends StatelessWidget {
  final List<dynamic> posts;
  final ScrollController scrollController;

  HomeBody({required this.posts, required this.scrollController});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 8.0),
      child: SingleChildScrollView(
        controller: scrollController,
        child: Directionality(
          textDirection: TextDirection.rtl,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              // Center(
              //   child: Container(
              //     padding: const EdgeInsets.all(10),
              //     decoration: BoxDecoration(
              //       border: Border(bottom: BorderSide(color: Colors.blue, width: 2.0)),
              //       borderRadius: BorderRadius.circular(10),
              //     ),
              //     // child: const Text(
              //     //   'دەربارەی پۆستەکان',
              //     //   style: TextStyle(
              //     //     color: Colors.black,
              //     //     fontWeight: FontWeight.w600,
              //     //     fontSize: 22,
              //     //     fontFamily: 'NRT',
              //     //   ),
              //     // ),
              //   ),
              // ),
              // Display posts
 Container(
  height: 260, // Adjust the height as needed
  child: ListView.builder(
    scrollDirection: Axis.horizontal,
    itemCount: posts.length >= 3 ? 3 : posts.length, // Limit to 3 posts or the total number of posts if less than 3
    itemBuilder: (context, index) {
      final startIndex = posts.length >= 3 ? posts.length - 3 : 0; // Start index of the last three posts
      return Container(
        width: MediaQuery.of(context).size.width * 0.8, // Adjust the width of each item
        margin: EdgeInsets.symmetric(horizontal: 8.0),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12.0), // Adjust the radius as needed
        ),
        child: InfoContainer(
          info: posts[startIndex + index]['title'],
          textAlign: TextAlign.right,
          postId: posts[startIndex + index]['id'],
          image: posts[startIndex + index]['image'],
          paragraph: posts[startIndex + index]['paragraph'],
          time: posts[startIndex + index]['time'],
        ),
      );
    },
  ),
),



              for (var post in posts)
                InfoContainer(
                  info: post['title'],
                  textAlign: TextAlign.right,
                  postId: post['id'],
                  image: post['image'],
                  paragraph: post['paragraph'],
                  time: post['time'],
                ),
            ],
          ),
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
    return Align(
      child: Container(
        child: Text(
          title,
          style: const TextStyle(
            color: Colors.blue,
            fontWeight: FontWeight.bold,
            fontSize: 26,
          ),
        ),
      ),
    );
  }
}

class InfoContainer extends StatelessWidget {
  final String info;
  final TextAlign textAlign;
  final int postId;
  final String image;
  final String paragraph;
  final String time;

  InfoContainer({
    required this.info,
    required this.textAlign,
    required this.postId,
    required this.image,
    required this.paragraph,
    required this.time,
  });

  @override
  Widget build(BuildContext context) {
    String baseUrl = 'http://51.20.138.46/';
    String imageUrl = baseUrl + image;

    return GestureDetector(
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => DetailScreen(
              postId: postId,
              title: info,
              image: imageUrl,
              paragraph: paragraph,
              time: time,
            ),
          ),
        );
      },
      child: Align(
        alignment: Alignment.centerRight,
        child: Container(
          margin: const EdgeInsets.symmetric(vertical: 5),
          padding: const EdgeInsets.fromLTRB(10, 5, 10, 5),
          decoration: BoxDecoration(
            color: Colors.grey[300],
            borderRadius: BorderRadius.circular(8),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                info,
                style: const TextStyle(fontSize: 16, fontFamily: 'NRT'),
                textAlign: textAlign,
              ),
              const SizedBox(height: 5),
              ClipRRect(
                borderRadius: BorderRadius.circular(8),
                child: Image.network(
                  imageUrl,
                  height: 150,
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              const SizedBox(height: 5),
            ],
          ),
        ),
      ),
    );
  }
}
