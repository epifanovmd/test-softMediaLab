import { formattedNumber } from "Common/formattedNumber";
import { useForm } from "Common/useForm";
import { Input } from "Components/controls/input/input";
import { RadioButton } from "Components/controls/radioButton/radioButton";
import { Switcher } from "Components/controls/switcher/switcher";
import { CustomTooltip } from "Components/controls/tooltip/tooltip";
import { CloseIcon } from "Components/icon/closeIcon";
import { InfoIcon } from "Components/icon/infoIcon";
import React, { FC, useCallback, useMemo } from "react";
import styled from "styled-components";

const Title = styled.div`
  color: #666;
  margin-bottom: 10px;
`;
const Ndfl = styled.div`
  display: flex;
  align-items: center;
`;
const Row = styled.div`
  align-items: center;
  display: flex;
  margin-top: 10px;
`;
const Form = styled.div`
  display: flex;
  flex-flow: column;
`;
const Rub = styled.div`
  color: black;
  font-weight: 600;
  font-size: 18px;
`;

const NdflTitle = styled.div<{ active?: boolean }>`
  ${({ active }) => (active ? "color: black" : "color: #ddd")};
  display: flex;
`;

const Card = styled.div`
  margin-top: 10px;
  display: flex;
`;

const Value = styled.div`
  padding-right: 5px;
  color: black;
  font-weight: 600;
  font-size: 18px;
`;

const Rows = styled.div`
  display: flex;
  flex-flow: column;
  background: bisque;
  padding: 10px;
`;

const salaryOptions = [
  {
    value: "month",
    label: "Оклад за месяц",
  },
  {
    value: "mrot",
    label: "МРОТ",
  },
  {
    value: "day",
    label: "Оплата за день",
  },
  {
    value: "hour",
    label: "Оплата за час",
  },
];

const NDFL = 0.13;

export const From: FC = () => {
  const {
    fieldNames,
    handleSubmit,
    handleChange,
    setFieldValue,
    values,
  } = useForm(
    {
      initialValues: {
        salaryOption: "month",
        ndfl: true,
        salary: "40000",
      },
    },
    ["salaryOption", "ndfl", "salary"],
  );

  const onChangeControl = useCallback(
    (name, value) => () => {
      setFieldValue(name, value);
    },
    [setFieldValue],
  );
  const onChangeSalary = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setFieldValue(
        "salary",
        // eslint-disable-next-line prefer-regex-literals
        String(value).replace(new RegExp(" ", "g"), ""),
      );
    },
    [setFieldValue],
  );

  const ndfl = useMemo(() => +values.salary * NDFL, [values.salary]);

  return (
    <Form>
      <Title>Сумма</Title>
      {salaryOptions.map(({ label, value }, index) => (
        <Row key={index}>
          <RadioButton
            id={`${index}`}
            onChange={onChangeControl(fieldNames.salaryOption, value)}
            label={label}
            checked={value === values.salaryOption}
          />
          {value === "mrot" && (
            <CustomTooltip
              openIcon={<CloseIcon />}
              content={
                <div>
                  <b>Мрот</b> - минимальный размер оплаты труда. Разный для
                  разных регионов
                </div>
              }
            >
              <InfoIcon />
            </CustomTooltip>
          )}
        </Row>
      ))}

      <Row>
        <Ndfl>
          <NdflTitle active={!values.ndfl}>Указать с НДФЛ</NdflTitle>
          <Switcher
            id={fieldNames.ndfl}
            checked={values.ndfl}
            onChange={onChangeControl(
              fieldNames.ndfl,
              (state: any) => !state.ndfl,
            )}
          />
          <NdflTitle active={values.ndfl}>Без НДФЛ</NdflTitle>
        </Ndfl>
      </Row>

      {values.salaryOption !== "mrot" && (
        <Row>
          <Input
            name={fieldNames.salary}
            value={formattedNumber(values.salary)}
            onChange={onChangeSalary}
            placeholder={"Сумма"}
          />
          <Rub>
            ₽{" "}
            {values.salaryOption === "day"
              ? "в день"
              : (values.salaryOption === "hour" && "в час") || ""}
          </Rub>
        </Row>
      )}

      {values.salaryOption === "month" && (
        <Card>
          <Rows>
            <Row>
              <Value>
                {values.ndfl
                  ? formattedNumber(values.salary)
                  : formattedNumber(+values.salary - ndfl)}
              </Value>
              острудник будет получать на руки
            </Row>
            <Row>
              <Value>{formattedNumber(ndfl)}</Value>
              НДФЛ, 13% от оклада
            </Row>
            <Row>
              <Value>
                {formattedNumber(
                  values.ndfl ? +values.salary + ndfl : +values.salary,
                )}
              </Value>
              за сотрудника в месяц
            </Row>
          </Rows>
        </Card>
      )}
    </Form>
  );
};
