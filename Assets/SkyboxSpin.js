#pragma strict

public var rotateSpeed = 2.0;

function Start () {

}

function Update () {
	transform.Rotate(Vector3.up * Time.deltaTime * rotateSpeed, Space.World);
}