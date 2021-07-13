import {
  selectors as getUniInfoSelectors,
  actions as getUniInfoActions,
} from 'modules/University/GetUniInfo';
import {
  actions as getFacultiesActions,
  selectors as getFacultiesSelectors,
} from 'modules/University/GetFaculties';
import {
  actions as getGrantsDetailsActions,
  selectors as getGrantsDetailsSelectors,
} from 'modules/University/GetGrantsDetails';
import {
  actions as updateUniRateActions,
  selectors as updateUniRateSelectros,
} from 'modules/University/UpdateRate';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

export default () => {
  const [openSection, setOpenSection] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const uniInfo = useSelector(getUniInfoSelectors.selectGetUniInfo);
  const faculties = useSelector(getFacultiesSelectors.selectGetFaculties);
  const uniRateState = useSelector(updateUniRateSelectros.selectUpdateRate);
  const grantsDetails = useSelector(getGrantsDetailsSelectors.selectGetGrantsDetails);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const { id: uniId } = useParams();

  const setOpen = (id) => {
    if (id === openSection) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  };

  const handleModalOpen = (faculty) => {
    setModalOpen(true);
    setSelectedFaculty(faculty);
    dispatch(getGrantsDetailsActions.getGrantsDetails.request(faculty.id));
  };

  // get faculties
  useEffect(() => {
    dispatch(getFacultiesActions.getFaculties.request(uniId));
  }, [uniId]);

  // charts

  const formattedGrantsDetails = _.groupBy(grantsDetails.data, (grant) => grant.year);

  const grantsNumberByKey = (grant) => Object.keys(formattedGrantsDetails)
    .map((key) => formattedGrantsDetails[key][0][grant]);

  const leftSpaces = Object.keys(formattedGrantsDetails)
    .map((key) => {
      const res = formattedGrantsDetails[key][0].totallyPlace
      - formattedGrantsDetails[key][0].enrolledStudents;
      if (res < 0) return 0;
      return res;
    });

  const chartData = {
    labels: [...Object.keys(formattedGrantsDetails)],
    datasets: [
      {
        label: '100% გრანტი',
        data: [...grantsNumberByKey('hundred')],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '70% გრანტი',
        data: [...grantsNumberByKey('fifty')],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '50% გრანტი',
        data: [...grantsNumberByKey('seventy')],
        backgroundColor: 'rgb(3, 252, 211)',
      },
      {
        label: 'უგრანტო',
        data: [...grantsNumberByKey('unGranted')],
        backgroundColor: 'rgb(185, 227, 93)',
      },
      {
        label: 'შეუვსებელი ადგილები',
        data: [...leftSpaces],
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

  // raiting change
  const handleRaitingChange = (raiting) => {
    dispatch(updateUniRateActions.updateRate.request({
      universityId: parseInt(uniId, 10),
      rateNumber: raiting,
    }));
  };

  useEffect(() => {
    if (uniRateState.statuses.isSucceed) {
      console.log(uniRateState);
      dispatch(getUniInfoActions.getUniInfo.request(uniId));
    }
  }, [uniRateState]);

  return {
    isModalOpen,
    setModalOpen,
    chartData,
    chartOptions,
    setOpen,
    openSection,
    uniInfo,
    faculties: faculties?.data?.faculties || [],
    handleModalOpen,
    handleRaitingChange,
    selectedFaculty,
  };
};
