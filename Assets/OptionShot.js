#pragma strict

var shotHandler : ProjectileShooter;
var shotSpacing = 1.0;
var shooting = false;

function Start () {
	shotHandler = gameObject.GetComponent(ProjectileShooter);
}

function Update () {
	if (!shooting) { Fire(); }
}

function Fire () {
	if(Input.GetKey('space')) {
		shooting = true;
		shotHandler.Fire(0, 1.0);
		yield WaitForSeconds(shotSpacing);
		shooting = false;
	}
}
