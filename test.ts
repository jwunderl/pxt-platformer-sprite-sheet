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

// let hero = sprites.create(sprites.platformer.mainLeftIdle, SpriteKind.Player)
// hero.setFlag(SpriteFlag.StayInScreen, true);
// hero.ay = 400;
// controller.moveSprite(hero, 100, 0);
// controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
//     hero.vy = -200
// })
// scene.setBackgroundColor(0x9)

// /** running **/
// let mainRunLeft = animation.createAnimation(ActionKind.RunningLeft, 200)
// animation.attachAnimation(hero, mainRunLeft)
// mainRunLeft.addAnimationFrame(sprites.platformer.mainLeftRun0)
// mainRunLeft.addAnimationFrame(sprites.platformer.mainLeftRun1)
// mainRunLeft.addAnimationFrame(sprites.platformer.mainLeftRun2)
// mainRunLeft.addAnimationFrame(sprites.platformer.mainLeftRun3)

// let mainRunRight = animation.createAnimation(ActionKind.RunningRight, 200)
// animation.attachAnimation(hero, mainRunRight)
// mainRunRight.addAnimationFrame(sprites.platformer.mainRightRun0)
// mainRunRight.addAnimationFrame(sprites.platformer.mainRightRun1)
// mainRunRight.addAnimationFrame(sprites.platformer.mainRightRun2)
// mainRunRight.addAnimationFrame(sprites.platformer.mainRightRun3)


// /** idle **/
// let mainIdleLeft = animation.createAnimation(ActionKind.IdleLeft, 200);
// mainIdleLeft.addAnimationFrame(sprites.platformer.mainLeftIdle);
// animation.attachAnimation(hero, mainIdleLeft)

// let mainIdleRight = animation.createAnimation(ActionKind.IdleRight, 200);
// animation.attachAnimation(hero, mainIdleRight)
// mainIdleRight.addAnimationFrame(sprites.platformer.mainRightIdle);

// /** crouch */

// let mainCrouchLeft = animation.createAnimation(ActionKind.CrouchLeft, 200);
// animation.attachAnimation(hero, mainCrouchLeft);
// mainCrouchLeft.addAnimationFrame(sprites.platformer.mainLeftCrouch);

// let mainCrouchRight = animation.createAnimation(ActionKind.CrouchRight, 200);
// animation.attachAnimation(hero, mainCrouchRight);
// mainCrouchRight.addAnimationFrame(sprites.platformer.mainRightCrouch);

// /** jumping **/
// // Because there isn't currently an easy way to say "play this animation a single time
// // and stop at the end", this just adds a bunch of the same frame at the end to accomplish
// // the same behavior
// let mainJumpLeft = animation.createAnimation(ActionKind.JumpingLeft, 200);
// animation.attachAnimation(hero, mainJumpLeft)
// mainJumpLeft.addAnimationFrame(sprites.platformer.mainLeftJump0);
// mainJumpLeft.addAnimationFrame(sprites.platformer.mainLeftJump1);
// for (let i = 0; i < 30; i++)
//     mainJumpLeft.addAnimationFrame(sprites.platformer.mainLeftJump2);

// let mainJumpRight = animation.createAnimation(ActionKind.JumpingRight, 200);
// animation.attachAnimation(hero, mainJumpRight)
// mainJumpRight.addAnimationFrame(sprites.platformer.mainRightJump0);
// mainJumpRight.addAnimationFrame(sprites.platformer.mainRightJump1);
// for (let i = 0; i < 30; i++)
//     mainJumpRight.addAnimationFrame(sprites.platformer.mainRightJump2);

// game.onUpdate(function () {
//     if (hero.vx < 0) {
//         facingLeft = true;
//     } else if (hero.vx > 0) {
//         facingLeft = false;
//     }

//     if (controller.down.isPressed()) {
//         animation.setAction(hero, facingLeft ? ActionKind.CrouchLeft : ActionKind.CrouchRight);
//         return;
//     }

//     if (hero.vy < 20) {
//         animation.setAction(hero, facingLeft ? ActionKind.JumpingLeft : ActionKind.JumpingRight)
//         return;
//     }
//     if (hero.vx < 0) {
//         animation.setAction(hero, ActionKind.RunningLeft)
//     } else if (hero.vx > 0) {
//         animation.setAction(hero, ActionKind.RunningRight)
//     } else {
//         animation.setAction(hero, facingLeft ? ActionKind.IdleLeft : ActionKind.IdleRight)
//     }
// })

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
