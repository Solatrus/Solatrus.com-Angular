import { trigger, transition, query, style, group, animate, animateChild } from '@angular/animations';

export const slideAnimations = trigger('slideAnimation', [
  transition('* => music-details', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '-100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
      transition('music-details => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
]);

const insertedFlex = 1;
const removedFlex = 0.00000001;
const insertedOpacity = 1;
const removedOpacity = 0;
const removedTransform = 'translateX(100%)';
const insertedTransform = 'none';
const insertedWidth = 'auto';
const removedWidth = 0;

export const flexItemLeaveEnter = trigger('flexItemLeaveEnter', [
      transition('moving => void', [
        style({
          opacity: removedOpacity,
          //transform: removedTransform,
          flex: removedFlex,
          width: removedWidth,
        }),
        animate('0.3s ease-in', style({
          opacity: insertedOpacity,
          //transform: insertedTransform,
          flex: insertedFlex,
          width: insertedWidth,
        }))
      ]),
      transition('moving => stopped', [
        style({
          opacity: insertedOpacity,
          //transform: insertedTransform, 
          flex: insertedFlex,
          width: insertedWidth,
        }),
        animate('0.3s ease-out', style({
          opacity: removedOpacity, 
          //transform: removedTransform,
          flex: removedFlex,
          width: removedWidth,
        }))
      ]),
      transition('stopped => moving', [
        style({
          opacity: insertedOpacity,
          //transform: insertedTransform, 
          flex: insertedFlex,
          width: insertedWidth,
        }),
        animate('0.3s ease-out', style({
          opacity: removedOpacity, 
          //transform: removedTransform,
          flex: removedFlex,
          width: removedWidth,
        }))
      ]),
      transition('void => moving', [
        style({
          opacity: insertedOpacity,
          //transform: insertedTransform, 
          flex: insertedFlex,
          width: insertedWidth,
        }),
        animate('0.3s ease-out', style({
          opacity: removedOpacity, 
          //transform: removedTransform,
          flex: removedFlex,
          width: removedWidth,
        }))
      ])
    ]);