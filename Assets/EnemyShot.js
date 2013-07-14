#pragma strict

var shotHandler : ProjectileShooter;

var x = 1.0;
var z = 1.0;
var angle : Vector3 = Vector3.right;

var awake = false;
var shot = false;
var player : Transform;
var distanceToPlayer = 1.0;
enum pattern_type { column, row, spread, spiderweb };
var waves : int = 1;
var bullets_per_wave : int = 1;
var pattern : pattern_type;

function Start () {
	player = GameObject.FindWithTag('Player').GetComponent(Transform);
	shotHandler = gameObject.GetComponent(ProjectileShooter);
}

function Update () {
	if (!awake) {
		if (transform.position.z <= player.position.z + distanceToPlayer) {
			awake = true;
		}
	}
	else if (!shot) {
		switch (pattern) {
			case pattern_type.column:
				shotHandler.FireColumn(x, z, waves);
				break;
			case pattern_type.row:
				shotHandler.timeBetweenShots = 0.0;
			case pattern_type.spread:
				shotHandler.FireSpreads(z, bullets_per_wave, waves, angle);
				break;
			case pattern_type.spiderweb:
				shotHandler.FireSpiderweb(z, bullets_per_wave, waves, angle);
				break;
		}
		shot = true;
	}
}
