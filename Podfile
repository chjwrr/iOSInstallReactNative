platform :ios, '9.0'
use_frameworks!
target 'myTest' do
pod 'AFNetworking'
pod 'MBProgressHUD'
pod 'React', :path => './reactnative/node_modules/react-native', :subspecs => [
  'Core',
  'DevSupport',
  'RCTText',
  'RCTNetwork',
  'RCTWebSocket',
  'RCTImage',
  'RCTGeolocation',
  'RCTSettings',
  'CxxBridge', # Include if RN >= 0.47
  'ART',
  'RCTActionSheet',
  'RCTGeolocation',
  'RCTPushNotification',
  'RCTVibration',
  'RCTLinkingIOS'
  ]
pod 'yoga', :path => './reactnative/node_modules/react-native/ReactCommon/yoga'
pod 'DoubleConversion', :podspec => './reactnative/node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
pod 'Folly', :podspec => './reactnative/node_modules/react-native/third-party-podspecs/Folly.podspec'
pod 'glog', :podspec => './reactnative/node_modules/react-native/third-party-podspecs/glog.podspec'

end
