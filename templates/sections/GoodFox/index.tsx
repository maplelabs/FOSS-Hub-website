/**
 * Files generated using template generator
 */
import React from 'react';

import Card from './components/Card';
import Table from './components/Table';
import ListViewIcon from '../../../public/images/list-view.svg'
import GridViewIcon from '../../../public/images/grid-view.svg'
import Link from 'next/link';
import { GoodFoxProps } from './config';
import styles from './styles.module.css';

export default function GoodFox({id,title, columnHeaders, listItems}:GoodFoxProps) {
    const [tabularView, setTabularView] = React.useState(true);
    return   <div id={id} className="uk-width-1-1">
    <div className="uk-section uk-dark" style={{ marginBottom: '-20px' }}>
      <div className="uk-container">
        <div className="uk-flex uk-flex-between uk-margin-medium-bottom">
          <div className={`uk-h1 uk-text-bolder uk-margin-small-bottom ${styles['color_midnight-blue']}`}>
            {title}
          </div>
          <div className={styles.view_all} hidden={true}>
            <Link className="uk-button uk-button-link uk-padding-small uk-margin-small-left uk-margin-small-right uk-text-bolder" href='projects'>
              VIEW ALL
            </Link>
          </div>
          <div onClick={() => setTabularView(!tabularView)} className="uk-visible@l">
            {tabularView ? <ListViewIcon /> : <GridViewIcon />}
          </div>
        </div>
        {tabularView ? (
          <div className="uk-child-width-1-4@m uk-text-left uk-grid uk-grid-small uk-grid-match" data-uk-grid>
            {listItems.map((project,index) => <Card data={project} key={index}></Card>)}
          </div>) : (
          <Table data={listItems} columns={columnHeaders} key={listItems.length}></Table>
        )}
      </div>
    </div>
  </div>
}
