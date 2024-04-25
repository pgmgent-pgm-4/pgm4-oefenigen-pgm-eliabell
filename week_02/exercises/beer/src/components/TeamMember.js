// TeamMembers.js
import React from 'react';
import styles from './TeamMember.module.css';

function TeamMember({firstName, lastName, role, email, phoneNumber}) {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{firstName} {lastName}</h2>
      <p className={styles.role}>{role}</p>
      <p className={styles.email}>{email}</p>
      <p className={styles.phoneNumber}>{phoneNumber}</p>
    </div>
  );
}

export default TeamMember;