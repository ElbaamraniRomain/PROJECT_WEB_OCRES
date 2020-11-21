import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Widget1 from '../widgets/widget_1'
import Widget2 from '../widgets/widget_2'
import Widget3 from '../widgets/widget_3'
import Widget4 from '../widgets/widget_4'
import Widget5 from '../widgets/widget_5'
import Widget6 from '../widgets/widget_6'

export default {
  title: 'dashboard',
};

export const widget1 = () => (
  <div className="Widget-1">
    <Widget1/>
</div>
);
export const widget2 = () => (
  <div className="Widget-2">
    <Widget2/>
</div>
);
export const widget3 = () => (
    <div className="Widget-3">
    <Widget3/>
</div>

);
export const widget4 = () => (
        <div className="Widget-4">
            <Widget4/>
 </div>
);
export const widget5 = () => (
  <div className="Widget-4">
      <Widget5/>
</div>
);
export const widget6 = () => (
  <div className="Widget-4">
      <Widget6/>
</div>
);
