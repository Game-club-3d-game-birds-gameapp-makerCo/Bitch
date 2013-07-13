#pragma strict

var velocityX : float = 1.0;
var velocityZ : float = 1.0;

function Start () {

}

function Update () {
	transform.position.z = transform.position.z - velocityZ;
	transform.position.x = transform.position.x - velocityX;
}
