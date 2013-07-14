#pragma strict

var projectile : Transform;
var timeBetweenShots : float = 0.15;
var timeBetweenWaves : float = 0.7;
enum direction { left, right };

function Start () {
}

function Update () {
}

/* Fires multiple waves of spread shots.
 * z : float: The vertical (towards the player) speed of the shot.
 * number_of_shots : int
 * number_of_waves : int
 * angle : direction: Fire left or right. Value must be from the direction enum.
 */
function FireSpreads (z : float, number_of_shots : int, number_of_waves : int, angle : direction) {
	for (var i = 0; i < number_of_waves; i++) {
		FireSpread(z, number_of_shots, angle);
		yield WaitForSeconds(timeBetweenWaves);
	}
}

function FireSpiderweb (z : float, number_of_shots : int, number_of_waves : int, angle : direction) {
	currentAngle = angle;
	for (var i = 0; i < number_of_waves; i++) {
		FireSpread(z, number_of_shots, angle);
		currentAngle = (currentAngle == direction.left) ? direction.right : direction.left;
		yield WaitForSeconds(timeBetweenWaves);
	}
}

/* Fires a single wave of one or more horizontally-aligned shots.
 */
function FireSpread (z : float, number_of_shots : int, angle : direction) {
	for (var i = 0; i < number_of_shots; i++) {
		var x : float = number_of_shots/2 - number_of_shots + i;
		if (angle == direction.left) { x = -x; }
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
	var bullet = Instantiate(projectile, Vector3(transform.position.x, transform.position.y, transform.position.z - 1.0), transform.rotation);
	var movement = bullet.GetComponent(BulletMovement);
	movement.velocityX = x;
	movement.velocityZ = z;
}
