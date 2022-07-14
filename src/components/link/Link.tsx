import React, { PropsWithChildren } from "react";
import styles from "./Link.module.css"
import PropTypes from "prop-types"

export enum Target{
  BLANK = "_blank",
  SELF = "_self",
}

interface LinkProps{
  href: string
  target?: Target
}

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({ href, target, children }) => {
  return <a className={styles.link} href={href} target={target}>{children}</a>
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
}

Link.defaultProps = {
  target: Target.SELF,
}
