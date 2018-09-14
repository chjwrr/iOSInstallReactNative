//
//  ViewController.m
//  myTest
//
//  Created by liepin on 2018/9/6.
//  Copyright © 2018年 liepin. All rights reserved.
//

#import "ViewController.h"
#import <React/RCTRootView.h>
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    NSLog(@"123");
    
  
    NSURL *jsCodeLocation;
    jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/App.bundle?platform=ios&dev=true"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"myTest"
                                                 initialProperties:nil
                                                     launchOptions:nil];
    self.view = rootView;
    
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
