import {
  actions as getUniInfoActions,
  selectors as getUniInfoSelectors,
} from 'modules/University/GetUniInfo';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const [openSection, setOpenSection] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const uniInfo = useSelector(getUniInfoSelectors.selectGetUniInfo);
  const { id: uniId } = useParams();
  const setOpen = (id) => {
    if (id === openSection) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  };

  // get uni info
  useEffect(() => {
    dispatch(getUniInfoActions.getUniInfo.request(uniId));
  }, []);

  useEffect(() => () => dispatch(getUniInfoActions.getUniInfo.reset()), []);

  // charts

  const chartData = {
    labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
    datasets: [
      {
        label: '100% გრანტი',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '70% გრანტი',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '50% გრანტი',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(3, 252, 211)',
      },
      {
        label: 'უგრანტო',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(185, 227, 93)',
      },
      {
        label: 'შეუვსებელი ადგილები',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return {
    isModalOpen,
    setModalOpen,
    chartData,
    chartOptions,
    setOpen,
    openSection,
    uniInfo,
  };
};
