import React, { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import './AccordianList.scss';

/**
 * AccordionList componets renders the accodian with the provided data
 * @param {*} props
 * @returns jsx
 */
const AccordionList = ({ data, details, handleSelection }) => {
  // states below for the Accordian component
  const [expanded, setExpanded] = useState(false);

  //useEffect updated whether the accordian expanded or not based on the id
  useEffect(() => {
    if (data?.id === details?.id) {
      setExpanded(true);
    }
  }, [data?.id, details?.id]);

  /**
   * handleAccordionChange updated the expanded state of the accordian
   */
  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  /**
   * handleItemSelection updates the data of the category selected in the home page
   * @param {*} item
   */
  const handleItemSelection = (item) => {
    handleSelection({
      label: data?.label,
      id: data?.id,
      selectedOption: item,
    });
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleAccordionChange}
      className={
        expanded && data?.id === details?.id
          ? 'accordian-container-expanded'
          : 'accordian-container'
      }
    >
      <AccordionSummary id={data?.id} aria-controls={`${data?.id}-content`}>
        <div className='accordian-label'>
          {expanded ? (
            <IndeterminateCheckBoxOutlinedIcon />
          ) : (
            <AddBoxOutlinedIcon />
          )}{' '}
          {data?.label}
        </div>
      </AccordionSummary>
      {data?.options?.length ? (
        <AccordionDetails
          id={`${data?.id}-content`}
          className='accordian-contents'
        >
          {data?.options?.map((item) => {
            return (
              <button
                onClick={() => handleItemSelection(item)}
                className={
                  item === details?.selectedOption
                    ? 'accordian-option-selected'
                    : 'accordian-option'
                }
                key={item}
              >
                {item}
              </button>
            );
          })}
        </AccordionDetails>
      ) : null}
    </Accordion>
  );
};

export default AccordionList;
