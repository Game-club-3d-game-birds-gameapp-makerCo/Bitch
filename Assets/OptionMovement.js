#pragma strict

public var objectToFollow : GameObject;
public var leashLength = 2.0;

function Start () {

}

function Update () {
	transform.position = objectToFollow.transform.position + Vector3.ClampMagnitude(transform.position - objectToFollow.transform.position, leashLength);
	//Debug.DrawRay(objectToFollow.transform.position, Vector3.ClampMagnitude(transform.position - objectToFollow.transform.position, leashLength), Color.red, 0.4);
}