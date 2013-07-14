#pragma strict

var projectile : Transform;
var timeBetweenShots : float = 0.15;
var timeBetweenWaves : float = 0.7;

function Start () {
}

function Update () {
}

/* Fires multiple waves of spread shots.
 * z : float: The vertical (towards the player) speed of the shot.
 * number_of_shots : int
 * number_of_waves : int
 * angle : direction: Fire left or right. Value must be Vector3.left or Vector3.right.
 */
function FireSpreads (z : float, number_of_shots : int, number_of_waves : int, angle : Vector3) {
	for (var i = 0; i < number_of_waves; i++) {
		FireSpread(z, number_of_shots, angle);
		yield WaitForSeconds(timeBetweenWaves);
	}
}

function FireSpiderweb (z : float, number_of_shots : int, number_of_waves : int, angle : Vector3) {
	var currentAngle = angle;
	for (var i = 0; i < number_of_waves; i++) {
		FireSpread(z, number_of_shots, currentAngle);
		currentAngle = -currentAngle;
		yield WaitForSeconds(timeBetweenWaves);
	}
}

/* Fires a single wave of one or more horizontally-aligned shots.
 */
function FireSpread (z : float, number_of_shots : int, angle : Vector3) {
	for (var i = 0; i < number_of_shots; i++) {
		var x : float = number_of_shots/2 - number_of_shots + i;
		if (angle == Vector3.left) { x = -x; }
		yield WaitForSeconds(timeBetweenShots);
		Fire(x/10, z);
	}
}

/* Fires a column of shots in the same direction. They will be spaced out
   according to the timeBetweenShots property.
   x : float: horizontal speed
   z : float: vertical speed
   number_of_shots : int
 */
function FireColumn (x : float, z : float, number_of_shots : int) {
	for (var i = 0; i < number_of_shots; i++) {
		Fire(x, z);
		yield WaitForSeconds(timeBetweenShots);
	}
}

/* Fires a single shot.
 * x : float: The horizontal speed of the shot.
 * z : float: The vertical speed of the shot.
 */
function Fire (x : float, z : float) {
	var bullet = Instantiate(projectile, transform.position, Quaternion.LookRotation(-Vector3.forward));
	var movement = bullet.GetComponent(BulletMovement);
	movement.velocityX = x;
	movement.velocityZ = z;
}
