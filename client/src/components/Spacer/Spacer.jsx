import React from "react";
import PropTypes from 'prop-types';
import cx from "classnames";

import styles from "./SpacerStyles.module.css";

export function Spacer({
  size = "default",
  orientation = "vertical",
}) {
  const cssClass = `${size}-${orientation}`;
  const className = cx(styles.spacer, styles[cssClass]);

  return <div id={`${orientation}-spacer`} className={className} />;
}

Spacer.propTypes = {
  size: PropTypes.oneOf([
    "small", "default", "medium", "large"
  ]),
  orientation: PropTypes.oneOf([
    "vertical", "horizontal"
  ]),
}
