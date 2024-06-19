import React from 'react'
import styles from './index.less'

const bigScreen: React.FC = () => {

    return (
        <div 
            className={styles.view}
        >
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default bigScreen