import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from "../../styles/Home.module.css";
import Card from './card';
import Table from './table';
import ListViewIcon from '../../public/images/list-view.svg'
import GridViewIcon from '../../public/images/grid-view.svg'
import {GridListViewProps} from './config'
export default function FeaturedProject({ gridListView }: GridListViewProps) {
  const [tabularView, setTabularView] = React.useState(true);
  return (
    <div id='projects' className="uk-width-1-1">
      <div className="uk-section uk-dark" style={{ marginBottom: '-20px' }}>
        <div className="uk-container">
          <div className="uk-flex uk-flex-between uk-margin-medium-bottom">
            <div className="uk-h1 uk-text-bolder uk-margin-small-bottom color-midnight-blue">
              {gridListView.title}
            </div>
            <div className={styles.view_all} hidden={true}>
              <Link className="uk-button uk-button-link uk-padding-small uk-margin-small-left uk-margin-small-right uk-text-bolder" href='projects'>
                VIEW ALL
              </Link>
            </div>
            <div onClick={() => setTabularView(!tabularView)}>
              {tabularView ? <ListViewIcon /> : <GridViewIcon />}
            </div>
          </div>
          {tabularView ? (
            <div className="uk-child-width-1-4@m uk-text-left uk-grid uk-grid-small uk-grid-match" data-uk-grid>
              {gridListView.cardDetails.map(project => <Card data={project} key={project.id}></Card>)}
            </div>) : (
            <Table data={gridListView.tableDetails.tableData} key={gridListView.tableDetails.id}></Table>
          )}
        </div>
      </div>
    </div>
  )
}