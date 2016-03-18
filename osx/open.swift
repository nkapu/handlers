import Foundation

let args = [String](Process.arguments);

for arg in args {
    var url = CFURLCreateWithString(kCFAllocatorDefault, arg, nil);
    LSOpenURLsWithRole([url], LSRolesMask.All, nil, nil, nil, 0);
}
