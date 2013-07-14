#pragma strict

public var playAreaWidth = 14.0;
public var playAreaHeight = 5.0;
public var avatar : GameObject;
public var baseRunSpeed = 5.0;
public var currentRunSpeed = baseRunSpeed;

function Start () {
	currentRunSpeed = baseRunSpeed;
}

function Update () {
	avatar.transform.localPosition.x = ((Mathf.Clamp(Input.mousePosition.x,0,Screen.width) / Screen.width) - 0.5) * playAreaWidth * 2;
	avatar.transform.localPosition.z = ((Mathf.Clamp(Input.mousePosition.y,0,Screen.height) / Screen.height) - 0.5) * playAreaHeight * 2;
	transform.Translate(0,0,Time.deltaTime * currentRunSpeed);
}