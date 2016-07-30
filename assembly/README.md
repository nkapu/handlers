# URL handlers - Assembly 2016 presentation

## Using

Can be viewed [on the web](http://hack.urlhandlers.info/assembly/).

Can also be used locally by running a web server in the `web/` directory.

```console
python -m SimpleHTTPServer 8080 # sees to work only with firefox.
```

And connecting the browser to <http://localhost:8080/assembly/>. Fonts still
load remotely.

## Publishing on the Github Pages

```console
git subtree push --prefix web origin gh-pages
```

## Setting

* Target <http://www.assembly.org/summer16/program/arttech-seminar/sessions/>
* Presentation language is English
* Crazy demo videos & screenshots
* Wake-up calls & disruptions
* Grande entry and grande finale
* Make sure that screen is mirrored so no need to look away from the crowd
* Always handle transitions between speakers explicitly
  * "Aimo, please"
  * "Atte, go ahead"
  * "Aimo, show me"
  * "Atte, shoot"
* Mac vs. Windows fairness (split screen or altering between them)
* Draft presentation <http://www.ee.oulu.fi/~exec/remarktest.html>
* Technical implementation
  * Static pages in GitHub Pages
    * HTML/JS/.../M4V-files
    * Can be cloned and presented locally
    * or given as online link that can be shared
* TODO:
  * presentation requirements to organizers
  * how to handle transitions from presentation to videos and backwards
    * two screens? (how to prevent next video from starting)
    * embedded videos

## 00:00 1. Motivation - video://

* Title
* video://
  * You open a browser and visit a web page
  * xmas video in fast pace (15 secs?, 10+ x, faster towards end?)
    * From Jani / talk about the target length and the split
    * The beginning sequence should show *extremely* clearly that it is
    just about opening a regular web page
    * Increasingly chaotic music/noise that abruptly cuts to silence,
    in style of <https://youtu.be/ZV-UEca2W9U?t=1m16s> (from 1:16 to 1:33)
      * [option 1 - Tybercore - Heavy Cinematic Hybrid Trailer](https://youtu.be/cKcDwlIPIro?t=57s)
      * [option 2 - Tybercore - Nocturnal Creature](https://youtu.be/a9SBfblEA6w?t=52s)
      * [option 3 - Tybercore - Hybrid Hollywood Trailer](https://youtu.be/sf820zgOhsI)
    * Cut to black in sync with the sound
    * Video candidates:
      * [Xmas video](https://youtu.be/Z9IG9ZD3PNI)
* why://
  * **What** did just happen?
  * You might not want all this happen on your machine
* who://
  * _Aimo_ speaks and _Atte_ introduces demo videos.
  * We are from University of Finland
  * We will walk you through this in slow motion
* video://replay
  * ~~Start from the end frame (black?) and "rewind" the video from end to
    start in superspeed (with the sound also rewinded backwards without
    the pitch going up)~~
  * ~~cut xmas video to sensible length with annotations?~~
  * Have screen shots with annotations
    1. you visit a web page
    1. plenty of applications open
    1. all sort of content opens
    1. printers and cameras get involved
    1. you hope to do your best to cancel everything safely
  * not too much detail in verbal explanation
  * TODO:
    * normal web browsing video? to explain common case (must be short)!!!!
      * maybe not, maybe just change the subtitle "... by exactly what?" to
        "surfing the web is safe!"
    * ~~initial video instead of writing URL maybe just surf~~ (not)
    * *screenshots* with annotations 1. - 5. from above

## 00:05 2. How did we end up here - gopher://, <http://>, magnet://, xxx://

* <http://>
  * For the masses
* <gopher://>
  * When I was young gopher
* <magnet://>
  * For the future
* <xxx://>
  * We found plenty
  * handler cloud?
* TODO:
  * title from URL (handlers) to URL schemes?
  * rearrange to start with <http://>
  * lead to the load with xxx:// - we found plenty of more
  * explain handler cloud
    * grow the cloud in ~5 slides

## 00:10 3. Challenge - <http://challenge.urlhandlers.info>

* This is **Serious** research
* Crowd sourced challenge
* Three teams (yellow, red and blue)
* Example screenshot of a steam or in-game chat
* Need help in research to find out what are the surprise "browsers" out there
* TODO:
  * From Serious Research -> "Pokemon" challenge (three colors)
  * After that explain what people have to do
  * In-game screenshots for Eve Online, SC2, CS GO, ...
    * One here, more later in challenge peek
  * We need you to ... no user agent forging!
  * Team with most user agents, most source addresses windows
  * Scoreboard display

## 00:15 4. Are URL handlers secure? - word://

* Video about opening word on remote content by surfing the web
  * [Open Word v0.5 video](https://youtu.be/5B7QV8iBOYU)
  * Word opens with remote content
* So what?
* Video, orginal at <https://www.youtube.com/watch?v=GyZMJr7RfBE>
  1. remote word content opened due to "careless" surfing
  1. Macros are accepted
  1. Files get encrypted
  1. Ransomware note pops up
* Video
  * [Locky in Action v0.6-cut video](https://youtu.be/PKDQhUWEQFM)
* What happen
  * *screenshots* with annotations 1. - 4. from above
* Recap with handler cloud
* TODO:
  * you visit a web page with a word link video, add sound
  * add sound to the "so what" video
  * recap with cloud with word:// circles
  * credit the original video by Omicron AG - Swiss made IT Security

## 00:20 5. Pop up marketing strikes back - twitter://

* [Popup marketing strikes back video](https://youtu.be/_TkR05uaDWI)
  * iframe carrousel launcher
  * twitter "advertisement" profiles and tweets
* fb:// ???
  * twitter is not the only one,there is e.g. Facebook ???
* TODO:
  * cut twitter ad video and add sound?
  * annoted screenshot based explanation in N steps?

## 00:25 6. Hack the Windows vs. Hack the Mac - freakshow://

* Challenge status (just a quick peek)
* Did you know you have candy crush soda saga in your windows?
* What URL handlers i do have in my gaming pc?
* Where I can insert URLs?
* Some browsers do block or ask! (not all of them tho)
  * But there are more than the browsers!
* TODO:
  * 1..n handler:// + screenshot
    * WIN: candycrush ?
    * MAC: bitcoin:3JDs4hAZeKE7vER2YvmH4yTMDEfoA1trnC?amount=666&label=Honest%20Marko&message=You%20Won
  * 1..n embedded browser
  * everything + split screenshot

## 00:30 8. Grand Final - dontpanic://

* challenge results so far
  * live until end of assembly
* [URL Handled video](https://youtu.be/I2K4bPCw9SE)

## 00:35 9. Q&A

* Meet and greet with mad and harmless scientists
* University of Oulu (OUSPG)
  * Juhani "Aimo" Eronen (Secret government agent)
* Kasper "Atte" Kyllönen (Summer trainee in crime "just a regular high schooler")

### Credits

* Mikko Kenttälä
* Joachim Viide
* Jani Kenttälä
* Marko Laakso
* [Original source material Locky in Action from Omicron AG - Swiss made IT Security](https://youtu.be/GyZMJr7RfBE)
