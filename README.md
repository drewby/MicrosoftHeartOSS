# MicrosoftHeartOSS
Simple demo web app to receive messages and fill in a heart with each received message.

We used this web app as a visualization of a cloud scale deployment in the de:code keynote here: https://channel9.msdn.com/Events/de-code/2016/keynote-en#time=1h46m33s

After the app is started, you can send messages to it using a simple web request to /msg/:guid where :guid can really be any valid string.

If you make a request to /rnd then the server will start to send 1000 messages down to the client with random strings. This is to simulate activity for testing.
