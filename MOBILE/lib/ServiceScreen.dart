import 'package:flutter/material.dart';
import 'navigations_bar.dart';
class Service extends StatelessWidget {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();

  Service({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        
        backgroundColor: Colors.blue,
        title: Text(
          'خزمەتگوزاریەکان',
          style: TextStyle(color: Colors.white,fontFamily:'NRT'),
        ),
        centerTitle: true,
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pushNamed(context, '/Home');
          },
        ),
        iconTheme: IconThemeData(color: Color.fromARGB(255, 252, 251, 251)),
        //bo danany border radius bo bottomy appbar
        shape: ContinuousRectangleBorder(
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(40.0),
          bottomRight: Radius.circular(40.0),
        ),
      ),
      ),
      endDrawer: MyEndDrawer(onThemeChanged: (bool ) {  },),
      body: Padding(
        padding: EdgeInsets.only(
          top: 8.0,
        ),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SizedBox(height: 20),
              SizedBox(height: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/Service/beauty');
                    },
                    child: Center(
                      child: SizedBox(
                        width: 150,
                        child: Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[300],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Image.asset(
                                'assets/images/Service_Icons/beauty.png',
                                width: 100,
                                height: 65,
                              ),
                              SizedBox(height: 10),
                              Text(
                                '  جوانکاری و',
                                style: TextStyle(
                                  fontSize: 18,
                                  fontFamily: 'NRT',
                                ),
                              ),
                              Text('  دەستکاری کردن',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  SizedBox(width: 50),
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/maintenance');
                    },
                    child: Center(
                      child: SizedBox(
                        width: 150,
                        child: Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[300],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Image.asset(
                                'assets/images/Service_Icons/maintenance.png',
                                width: 100,
                                height: 65,
                              ),
                              SizedBox(height: 10),
                              Text('ڕۆن گۆڕین و',
                                  style: TextStyle(
                                    fontSize: 16,
                                    fontFamily: 'NRT',
                                  )),
                              Text('فەحسی مانگانە',
                                  style: TextStyle(
                                    fontSize: 16,
                                    fontFamily: 'NRT',
                                  )),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              SizedBox(height: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/engine');
                    },
                    child: Center(
                      child: SizedBox(
                        width: 150,
                        child: Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[300],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Image.asset(
                                'assets/images/Service_Icons/engine.png',
                                width: 100,
                                height: 65,
                              ),
                              SizedBox(height: 10),
                              Text('کێشە لە ',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                              Text('مەکینە',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  SizedBox(width: 50),
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/smoke');
                    },
                    child: Center(
                      child: SizedBox(
                        width: 150,
                        child: Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[300],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Image.asset(
                                'assets/images/Service_Icons/smoke.png',
                                width: 100,
                                height: 65,
                              ),
                              SizedBox(height: 10),
                              Text('کێشەی',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                              Text(' دوکەڵکێش',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              SizedBox(height: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/tire');
                    },
                    child: Center(
                      child: SizedBox(
                        width: 150,
                        child: Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[300],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Image.asset(
                                'assets/images/Service_Icons/tires.png',
                                width: 100,
                                height: 65,
                              ),
                              SizedBox(height: 10),
                              Text('کێشەی تایە و',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                              Text(' باڵانس',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  SizedBox(width: 50),
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/electricity');
                    },
                    child: Center(
                      child: SizedBox(
                        width: 150,
                        child: Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[300],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Image.asset(
                                'assets/images/Service_Icons/electricity.png',
                                width: 100,
                                height: 85,
                              ),
                              SizedBox(height: 10),
                              Text('کێشەی کارەبا',
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontFamily: 'NRT',
                                  )),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              SizedBox(height: 10),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/brake');
                    },
                    child: Center(
                      child: SizedBox(
                        width: 150,
                        child: Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[300],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Image.asset(
                                'assets/images/Service_Icons/brake.png',
                                width: 100,
                                height: 65,
                              ),
                              SizedBox(height: 10),
                              Text('کێشەی ',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                              Text(' وەستێنەر',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  SizedBox(width: 50),
                  GestureDetector(
                    onTap: () {
                      Navigator.pushNamed(context, '/repeat');
                    },
                    child: Center(
                      child: SizedBox(
                        width: 150,
                        child: Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Colors.grey[300],
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Image.asset(
                                'assets/images/Service_Icons/repeat.png',
                                width: 110,
                                height: 70,
                              ),
                              SizedBox(height: 10),
                              Text(' دووبارە',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                              Text(' نوێکردنەوە',
                                  style: TextStyle(
                                    fontSize: 18,
                                    fontFamily: 'NRT',
                                  )),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
