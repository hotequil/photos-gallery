import React, { PropsWithChildren } from "react";
import styles from "./Link.module.css"
import PropTypes from "prop-types"
import { Link as LinkElement } from "react-router-dom"

export enum Target{
  BLANK = "_blank",
  SELF = "_self",
}

interface LinkProps{
  href: string
  target?: Target
}

export const Link: React.FC<PropsWithChildren<LinkProps>> = ({ href, target, children }) =>
  href.startsWith("http") ?
  <a href={href} className={styles.link} target={target}>{children}</a> :
  <LinkElement to={href} className={styles.link} target={target}>{children}</LinkElement>

Link.propTypes = {
  href: PropTypes.string.isRequired,
}

Link.defaultProps = {
  target: Target.SELF,
}
