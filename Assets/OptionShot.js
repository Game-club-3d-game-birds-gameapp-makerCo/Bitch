#pragma strict

var shotHandler : ProjectileShooter;
var shotSpacing = 1.0;
var shooting = false;
var player : PlayerMovement;

function Start () {
	player = GameObject.FindWithTag('Player').GetComponent(PlayerMovement);
	shotHandler = gameObject.GetComponent(ProjectileShooter);
}

function Update () {
	if (!shooting) { Fire(); }
}

function Fire () {
	if(Input.GetKey('space')) {
		shooting = true;
		shotHandler.Fire(0, 5.0 + player.currentRunSpeed);
		yield WaitForSeconds(shotSpacing);
		shooting = false;
	}
}
