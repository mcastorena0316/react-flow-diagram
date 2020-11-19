// @flow

import React from 'react';
import style from 'styled-components';
import Icon from '../icon/component';

import type { IconVariety } from '../icon/component';

/*
 * Presentational
 * ==================================== */

const ContextMenuStyle = style.ul`
  position: absolute;
  right: -.5em;
  transform: translateX(100%);
  align-self: flex-start;
`;

const Action = style.li`
  cursor: pointer;
`;

export type ContextMenuActions = Array<{
  action: Function, // eslint-disable-line flowtype/no-weak-types
  iconVariety: IconVariety,
  label: string,
}>;

const stopActionPropagation = (action: Function) => (
  ev: SyntheticMouseEvent<HTMLElement>,
): void => {
  console.log(ev.currentTarget.id.split('-')[1])
  ev.stopPropagation();
  action(ev);
};

type ContextMenuProps = {
  actions: ContextMenuActions,
  model: string,
};
const ContextMenu = (props: ContextMenuProps) => (
  <ContextMenuStyle>
    {props.actions.map(action => (
      action.iconVariety === 'arrow' && props.model=== 'Task' ? 
      ( 
        <g>
         <Action key={`${action.label}-${action.colors[0]}`} id={`${action.label}-${action.colors[0]}`} onMouseDown={stopActionPropagation(action.action)} >
          <Icon name={action.iconVariety} label={action.label} color={action.colors[0]}/> 
        </Action>
         <Action  key={`${action.label}-${action.colors[1]}`} id={`${action.label}-${action.colors[1]}`}  onMouseDown={stopActionPropagation(action.action)}>
          <Icon name={action.iconVariety} label={action.label} color={action.colors[1]} /> 
        </Action>
        </g>
      ) : 
      <Action 
         key={action.label}
          onMouseDown={stopActionPropagation(action.action)}
        >
        <Icon name={action.iconVariety} label={action.label}/> 
      </Action> 

    ))}
  </ContextMenuStyle>
);

export default ContextMenu;
