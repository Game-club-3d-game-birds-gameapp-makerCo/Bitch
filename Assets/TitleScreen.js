#pragma strict

function Start () {
	var screen : GUITexture = GetComponent(GUITexture);
	var r : Rect = Rect( (Screen.width - (Screen.height * 2)) * 0.75, 0, Screen.height * 2, Screen.height);
	screen.pixelInset = r;
}

function Update () {
	if(Input.GetKey('space')) {
		Application.LoadLevel('Main');
	}
}
