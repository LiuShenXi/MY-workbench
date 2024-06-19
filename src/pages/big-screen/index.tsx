import React from 'react'
import styles from './index.less'

const bigScreen: React.FC = () => {

    return (
        <div 
            className={styles.view}
        >
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <span className={styles.title}>各国薪资水平及税率分析</span>
                </div>
            </div>
        </div>
    )
}

export default bigScreen