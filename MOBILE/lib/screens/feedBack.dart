
// import 'dart:async';
// import 'package:flutter/material.dart';
// import 'package:url_launcher/url_launcher.dart';
// import '../navigation/navigations_bar.dart';

// class FeedbackPage extends StatefulWidget {
//   FeedbackPage({Key? key}) : super(key: key);

//   @override
//   _FeedbackPageState createState() => _FeedbackPageState();
// }

// class _FeedbackPageState extends State<FeedbackPage> {
//   late PageController _pageController;
//   int _currentPage = 0;
//   late Timer _timer;

//   @override
//   void initState() {
//     super.initState();
//     _pageController = PageController();
//     _timer = Timer.periodic(Duration(seconds: 3), (Timer timer) {
//       if (_currentPage < 1) {
//         _currentPage++;
//       } else {
//         _currentPage = 0;
//       }
//       // ama anemya
//       _pageController.animateToPage(
//         _currentPage,
//         duration: Duration(seconds: 1),
//         curve: Curves.easeInOut,
//       );
//     });
//   }

//   @override
//   void dispose() {
//     _pageController.dispose();
//     _timer.cancel();
//     super.dispose();
//   }
// //************************************************************************************************************888 */

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: buildAppBar(context),
//         endDrawer: MyEndDrawer(onThemeChanged: (bool ) {  },),
//       body: SingleChildScrollView(
//         child: Align(
//           alignment: Alignment.centerLeft,
//           child: Column(
//             children: [
//               buildHeaderImageSlider(),
//               buildLatestTopic(),
//               buildVideoContainer("https://youtu.be/waUT-01csbw", "assets/images/car_fire.png", "چۆن پارێزراوبین لە گڕگرتنی سەیارەکەمان؟"),
//               buildVideoContainer("https://youtu.be/H_q3vG8Niwc", "assets/images/tireExlosion.png", "تەقینی تایەی سەیارە"),
//             ],
//           ),
//         ),
//       ),
//     );
//   }
// //************************************************************************************************************888 */


//   // فەنکشنێک بۆ دروست کردنی ئەپ بار
//   AppBar buildAppBar(BuildContext context) {
//     return AppBar(
//       backgroundColor: Colors.blue,
//       title: Text('بۆ ئەپەکەمان', style: TextStyle(fontFamily: "NRT",color: Colors.white)),
//       centerTitle: true,
//       leading: IconButton(
//         icon: Icon(Icons.arrow_back),
//         onPressed: () {
//           Navigator.pushReplacementNamed(context, '/Home');
//         },
//       ),
//       iconTheme: IconThemeData(color: Color.fromARGB(255, 252, 251, 251)),
//       //clean this 
//       shape: ContinuousRectangleBorder(
//         borderRadius: BorderRadius.only(
//           bottomLeft: Radius.circular(40.0),
//           bottomRight: Radius.circular(40.0),
//         ),
//       ),
//     );
    
//   }

//   // فەنکشنێک بۆ درووستکردنی ئیمەیج سڵایدەرەکان
//   Widget buildHeaderImageSlider() {
//     return SizedBox(
//       height: 150.0,
//       width: 300.0,
//       child: PageView(
//         controller: _pageController,
//         children: [
//           buildHeaderImage("assets/images/dana.jpg", "  بەرنامەیەکی زۆر باشە دەستان خۆش "),
//           buildHeaderImage("assets/images/dana.jpg", "Another Image Title"),
//         ],
//       ),
//     );
//   }

//   // لێرە دوو پارمیتەرمان ناردووە پاڽ ی ئیمەیجەکەو لەگەڵ تایتڵەکەی پاشان هەر لێرە درێژی و پانی ڕەسمەکانمان دیاری کردووە
//   // وە ئایا پۆزیشنیان لەکوێ بێت وەهەندێ ستایل و جوانکاریشمان یاوە بە تێکستەکانمان
//   Widget buildHeaderImage(String imagePath, String title) {
//   return Stack(
//     children: [
//       Align(
//         alignment: Alignment.centerLeft,
//         child: Container(
//           width: 200,
//           height: 200,
//           child: ClipRRect(
//             borderRadius: BorderRadius.circular(20.0),
//             child: Image.asset(imagePath, width: 200, height: 100, fit: BoxFit.cover),
//           ),
//         ),
//       ),
//       Align(
//         alignment: Alignment.centerRight,
//         child: Container(
//           width: 100,
//           height: 100,
//           alignment: Alignment.topRight,
//           child: Text(
//             title,
//             textDirection: TextDirection.rtl,
//             style: TextStyle(color: Colors.black, fontSize: 14, fontFamily: "NRT",),
//           ),
//         ),
//       ),
//     ],
//   );
// }

//   // Function to build the latest topic section
//   Widget buildLatestTopic() {
//     return Container(
//       margin: EdgeInsets.only(top: 30.0),
//       padding: EdgeInsets.only(bottom: 10.0),
//       decoration: BoxDecoration(
//         border: Border(
//           bottom: BorderSide(
//             color: Colors.blue,
//             width: 3.0,
//           ),
//         ),
//       ),
//       child: Align(
//         alignment: Alignment.centerRight,
//         child: Padding(
//           padding: EdgeInsets.only(right: 20.0),
//           child: Text(
//             "نوێترین بابەت",
//             style: TextStyle(fontSize: 23.0, fontFamily: "NRT", fontWeight: FontWeight.bold),
//           ),
//         ),
//       ),
//     );
//   }

//   // Function to build a video container
//   Widget buildVideoContainer(String url, String imagePath, String title) {
//     return InkWell(
//       onTap: () {
//         launch(url);
//       },
//       child: Container(
//         height: 110,
//         decoration: BoxDecoration(
//           color: Colors.grey[300],
//           borderRadius: BorderRadius.circular(10.0),
//         ),
//         margin: EdgeInsets.only(top: 20.0),
//         child: Row(
//           mainAxisAlignment: MainAxisAlignment.spaceBetween,
//           children: [
//             Container(
//               height: 150,
//               width: 175,
//               padding: EdgeInsets.only(left: 20.0),
//               child: Image.asset(
//                 imagePath,
//                 width: 200.0,
//                 height: 400.0,
//               ),
//             ),
//             Container(
//               width: 175,
//               padding: EdgeInsets.only(right: 20.0),
//               child: Text(
//                 title,
//                 textDirection: TextDirection.rtl,
//                 style: TextStyle(fontSize: 14.0, fontFamily: "NRT", fontWeight: FontWeight.bold),
//               ),
//             ),
//           ],
//         ),
//       ),
//     );
//   }
// }

