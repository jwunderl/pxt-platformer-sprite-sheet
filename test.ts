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
//     JumpingRight
// }

// let facingLeft = false;

// let mySprite = sprites.create(platformerspritesheet.main_left_idle, SpriteKind.Player)
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
// animRunLeft.addAnimationFrame(platformerspritesheet.main_left_run0)
// animRunLeft.addAnimationFrame(platformerspritesheet.main_left_run1)
// animRunLeft.addAnimationFrame(platformerspritesheet.main_left_run2)
// animRunLeft.addAnimationFrame(platformerspritesheet.main_left_run3)

// let animRunRight = animation.createAnimation(ActionKind.RunningRight, 200)
// animation.attachAnimation(mySprite, animRunRight)
// animRunRight.addAnimationFrame(platformerspritesheet.main_right_run0)
// animRunRight.addAnimationFrame(platformerspritesheet.main_right_run1)
// animRunRight.addAnimationFrame(platformerspritesheet.main_right_run2)
// animRunRight.addAnimationFrame(platformerspritesheet.main_right_run3)


// /** idle **/
// let animIdleLeft = animation.createAnimation(ActionKind.IdleLeft, 200);
// animIdleLeft.addAnimationFrame(platformerspritesheet.main_left_idle);
// animation.attachAnimation(mySprite, animIdleLeft)

// let animIdleRight = animation.createAnimation(ActionKind.IdleRight, 200);
// animation.attachAnimation(mySprite, animIdleRight)
// animIdleRight.addAnimationFrame(platformerspritesheet.main_right_idle);

// /** jumping **/
// // this behavior isn't what is intended; jumps in mario go to the key frame and then stop
// // to emulate that without having events or one of animations, basically have to just add
// // a bunch of extra frames
// let animJumpLeft = animation.createAnimation(ActionKind.JumpingLeft, 200);
// animation.attachAnimation(mySprite, animJumpLeft)
// animJumpLeft.addAnimationFrame(platformerspritesheet.main_left_jump0);
// animJumpLeft.addAnimationFrame(platformerspritesheet.main_left_jump1);
// animJumpLeft.addAnimationFrame(platformerspritesheet.main_left_jump2);
// animJumpLeft.addAnimationFrame(platformerspritesheet.main_left_jump2);
// animJumpLeft.addAnimationFrame(platformerspritesheet.main_left_jump2);
// animJumpLeft.addAnimationFrame(platformerspritesheet.main_left_jump2);
// animJumpLeft.addAnimationFrame(platformerspritesheet.main_left_jump2);
// animJumpLeft.addAnimationFrame(platformerspritesheet.main_left_jump2);
// animJumpLeft.addAnimationFrame(platformerspritesheet.main_left_jump2);

// let animJumpRight = animation.createAnimation(ActionKind.JumpingRight, 200);
// animation.attachAnimation(mySprite, animJumpRight)
// animJumpRight.addAnimationFrame(platformerspritesheet.main_right_jump0);
// animJumpRight.addAnimationFrame(platformerspritesheet.main_right_jump1);
// animJumpRight.addAnimationFrame(platformerspritesheet.main_right_jump2);
// animJumpRight.addAnimationFrame(platformerspritesheet.main_right_jump2);
// animJumpRight.addAnimationFrame(platformerspritesheet.main_right_jump2);
// animJumpRight.addAnimationFrame(platformerspritesheet.main_right_jump2);
// animJumpRight.addAnimationFrame(platformerspritesheet.main_right_jump2);
// animJumpRight.addAnimationFrame(platformerspritesheet.main_right_jump2);
// animJumpRight.addAnimationFrame(platformerspritesheet.main_right_jump2);

// game.onUpdate(function () {
//     if (mySprite.vx < 0) {
//         facingLeft = true;
//     } else if (mySprite.vx > 0) {
//         facingLeft = false;
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