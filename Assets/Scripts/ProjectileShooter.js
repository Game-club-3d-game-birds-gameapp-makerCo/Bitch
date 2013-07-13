#pragma strict

var projectile : Transform;

function Start () {
	Fire(0.0, 0.4);
}

function Update () {
}

function Fire (x : float, z : float) {
	var bullet = Instantiate(projectile, Vector3(transform.position.x, transform.position.y, transform.position.z - 1.0), transform.rotation);
	var movement = bullet.GetComponent(BulletMovement);
	movement.velocityX = x;
	movement.velocityZ = z;
}
