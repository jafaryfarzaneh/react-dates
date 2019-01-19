import React from 'react';
import moment from 'moment';
import momentJalali from 'moment-jalali-date';
import { storiesOf } from '@kadira/storybook';

import SingleDatePickerWrapper from '../examples/SingleDatePickerWrapper';

const TestInput = props => (
  <div style={{ marginTop: 16 }} >
    <input
      {...props}
      type="text"
      style={{
        height: 48,
        width: 284,
        fontSize: 18,
        fontWeight: 200,
        padding: '12px 16px',
      }}
    />
  </div>
);

storiesOf('SingleDatePicker (SDP)', module)
  .addWithInfo('default', () => (
    <SingleDatePickerWrapper />
  ))
  .addWithInfo('as part of a form', () => (
    <div>
      <SingleDatePickerWrapper />
      <TestInput placeholder="Input 1" />
      <TestInput placeholder="Input 2" />
      <TestInput placeholder="Input 3" />
    </div>
   ))
  .addWithInfo('non-english locale (Chinese)', () => {
    moment.locale('zh-cn');
    return (
      <SingleDatePickerWrapper
        placeholder="入住日期"
        monthFormat="YYYY[年]MMMM"
        phrases={{
          closeDatePicker: '关闭',
          clearDate: '清除日期',
        }}
      />
    );
  })
  .addWithInfo('non-english locale (Persian)', () => {
    moment.locale('fa');
    return (
      <SingleDatePickerWrapper
        placeholder="تقویم فارسی"
        isRTL
        renderMonth={month => momentJalali(month).format('jMMMM jYYYY')}
        renderDay={day => momentJalali(day).format('jD')}
      />
    );
  })
    .addWithInfo('persian calendar', () => {
        moment.locale('fa');
        momentJalali.loadPersian();
        return (
            <SingleDatePickerWrapper
                isRTL
                showClearDate={true}
                isOutsideRange={() => false}
                monthFormat='jMMMM jYYYY'
                placeholder=" فارسی"
            />
        );
    });
//isOutsideRange={() => false}