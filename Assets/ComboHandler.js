#pragma strict

private var comboLevel = 0;

var skyCamera : Transform;
var rageLight : Transform;
var sunlight : Transform;

function Start () {
}

function Update () {
	if (Input.GetButtonDown("Swing")) increaseCombo(1);
}

function increaseCombo (levels : int) {
	comboLevel += levels;
	skyCamera.GetComponent(SkyboxSpin).rotateSpeed += 1;
	rageLight.light.intensity += 0.1;
	transform.GetComponent(PlayerMovement).currentRunSpeed += 1;
	sunlight.Rotate(Vector3.right*(-1), Space.Self);
	// transform.Find("Avatar").GetComponent(TrailRenderer).materials[0].SetColor("_Tint", Color.blue);
	// Debug.Log(transform.Find("Avatar").GetComponent(TrailRenderer).materials[0].GetColor("_Tint"));
}