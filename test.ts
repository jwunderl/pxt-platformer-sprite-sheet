// requires animation package
// enum SpriteKind {
//     Player,
//     Projectile,
//     Food,
//     Enemy
// }
// enum ActionKind {
//     RunningLeft,
//     RunningRight,
//     IdleLeft,
//     IdleRight,
//     JumpingLeft,
//     JumpingRight,
//     CrouchLeft,
//     CrouchRight
// }

// let facingLeft = false;

// let mySprite = sprites.create(sprites.platformer.mainLeftIdle, SpriteKind.Player)
// mySprite.setFlag(SpriteFlag.StayInScreen, true);
// mySprite.ay = 400;
// controller.moveSprite(mySprite, 100, 0);
// controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
//     mySprite.vy = -200
// })
// scene.setBackgroundColor(0x9)

// /** running **/
// let animRunLeft = animation.createAnimation(ActionKind.RunningLeft, 200)
// animation.attachAnimation(mySprite, animRunLeft)
// animRunLeft.addAnimationFrame(sprites.platformer.mainLeftRun0)
// animRunLeft.addAnimationFrame(sprites.platformer.mainLeftRun1)
// animRunLeft.addAnimationFrame(sprites.platformer.mainLeftRun2)
// animRunLeft.addAnimationFrame(sprites.platformer.mainLeftRun3)

// let animRunRight = animation.createAnimation(ActionKind.RunningRight, 200)
// animation.attachAnimation(mySprite, animRunRight)
// animRunRight.addAnimationFrame(sprites.platformer.mainRightRun0)
// animRunRight.addAnimationFrame(sprites.platformer.mainRightRun1)
// animRunRight.addAnimationFrame(sprites.platformer.mainRightRun2)
// animRunRight.addAnimationFrame(sprites.platformer.mainRightRun3)


// /** idle **/
// let animIdleLeft = animation.createAnimation(ActionKind.IdleLeft, 200);
// animIdleLeft.addAnimationFrame(sprites.platformer.mainLeftIdle);
// animation.attachAnimation(mySprite, animIdleLeft)

// let animIdleRight = animation.createAnimation(ActionKind.IdleRight, 200);
// animation.attachAnimation(mySprite, animIdleRight)
// animIdleRight.addAnimationFrame(sprites.platformer.mainRightIdle);

// /** crouch */

// let animCrouchLeft = animation.createAnimation(ActionKind.CrouchLeft, 200);
// animation.attachAnimation(mySprite, animCrouchLeft);
// animCrouchLeft.addAnimationFrame(sprites.platformer.mainLeftCrouch);

// let animCrouchRight = animation.createAnimation(ActionKind.CrouchRight, 200);
// animation.attachAnimation(mySprite, animCrouchRight);
// animCrouchRight.addAnimationFrame(sprites.platformer.mainRightCrouch);

// /** jumping **/
// // Because there isn't currently an easy way to say "play this animation a single time
// // and stop at the end", this just adds a bunch of the same frame at the end to accomplish
// // the same behavior
// let animJumpLeft = animation.createAnimation(ActionKind.JumpingLeft, 200);
// animation.attachAnimation(mySprite, animJumpLeft)
// animJumpLeft.addAnimationFrame(sprites.platformer.mainLeftJump0);
// animJumpLeft.addAnimationFrame(sprites.platformer.mainLeftJump1);
// for (let i = 0; i < 30; i++)
//     animJumpLeft.addAnimationFrame(sprites.platformer.mainLeftJump2);

// let animJumpRight = animation.createAnimation(ActionKind.JumpingRight, 200);
// animation.attachAnimation(mySprite, animJumpRight)
// animJumpRight.addAnimationFrame(sprites.platformer.mainRightJump0);
// animJumpRight.addAnimationFrame(sprites.platformer.mainRightJump1);
// for (let i = 0; i < 30; i++)
//     animJumpRight.addAnimationFrame(sprites.platformer.mainRightJump2);

// game.onUpdate(function () {
//     if (mySprite.vx < 0) {
//         facingLeft = true;
//     } else if (mySprite.vx > 0) {
//         facingLeft = false;
//     }

//     if (controller.down.isPressed()) {
//         animation.setAction(mySprite, facingLeft ? ActionKind.CrouchLeft : ActionKind.CrouchRight);
//         return;
//     }

//     if (mySprite.vy < 20) {
//         animation.setAction(mySprite, facingLeft ? ActionKind.JumpingLeft : ActionKind.JumpingRight)
//         return;
//     }
//     if (mySprite.vx < 0) {
//         animation.setAction(mySprite, ActionKind.RunningLeft)
//     } else if (mySprite.vx > 0) {
//         animation.setAction(mySprite, ActionKind.RunningRight)
//     } else {
//         animation.setAction(mySprite, facingLeft ? ActionKind.IdleLeft : ActionKind.IdleRight)
//     }
// })
