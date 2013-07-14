#pragma strict

var velocityX : float = 1.0;
var velocityZ : float = 1.0;
var timeToLive : float = 9.0;

function Start () {
	Destroy(gameObject, timeToLive);
}

function Update () {
	transform.Translate(-Vector3.forward * Time.deltaTime * velocityZ);
	transform.Translate(Vector3.right * Time.deltaTime * velocityX);
}
