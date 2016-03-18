import Foundation
import AppKit

let args = [String](Process.arguments);
let sw = NSWorkspace.sharedWorkspace();

for arg in args {
    var url = CFURLCreateWithString(nil, arg, nil);
    sw.openURL(url);
}
