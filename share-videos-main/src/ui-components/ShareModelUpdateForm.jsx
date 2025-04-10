/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getShareModel } from "../graphql/queries";
import { updateShareModel } from "../graphql/mutations";
const client = generateClient();
export default function ShareModelUpdateForm(props) {
  const {
    id: idProp,
    shareModel: shareModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    videoId: "",
    URL: "",
    domain: "",
    name: "",
    clientId: "",
    pageId: "",
  };
  const [videoId, setVideoId] = React.useState(initialValues.videoId);
  const [URL, setURL] = React.useState(initialValues.URL);
  const [domain, setDomain] = React.useState(initialValues.domain);
  const [name, setName] = React.useState(initialValues.name);
  const [clientId, setClientId] = React.useState(initialValues.clientId);
  const [pageId, setPageId] = React.useState(initialValues.pageId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = shareModelRecord
      ? { ...initialValues, ...shareModelRecord }
      : initialValues;
    setVideoId(cleanValues.videoId);
    setURL(cleanValues.URL);
    setDomain(cleanValues.domain);
    setName(cleanValues.name);
    setClientId(cleanValues.clientId);
    setPageId(cleanValues.pageId);
    setErrors({});
  };
  const [shareModelRecord, setShareModelRecord] =
    React.useState(shareModelModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getShareModel.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getShareModel
        : shareModelModelProp;
      setShareModelRecord(record);
    };
    queryData();
  }, [idProp, shareModelModelProp]);
  React.useEffect(resetStateValues, [shareModelRecord]);
  const validations = {
    videoId: [],
    URL: [],
    domain: [],
    name: [],
    clientId: [],
    pageId: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          videoId: videoId ?? null,
          URL: URL ?? null,
          domain: domain ?? null,
          name: name ?? null,
          clientId: clientId ?? null,
          pageId: pageId ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateShareModel.replaceAll("__typename", ""),
            variables: {
              input: {
                id: shareModelRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ShareModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Video id"
        isRequired={false}
        isReadOnly={false}
        value={videoId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoId: value,
              URL,
              domain,
              name,
              clientId,
              pageId,
            };
            const result = onChange(modelFields);
            value = result?.videoId ?? value;
          }
          if (errors.videoId?.hasError) {
            runValidationTasks("videoId", value);
          }
          setVideoId(value);
        }}
        onBlur={() => runValidationTasks("videoId", videoId)}
        errorMessage={errors.videoId?.errorMessage}
        hasError={errors.videoId?.hasError}
        {...getOverrideProps(overrides, "videoId")}
      ></TextField>
      <TextField
        label="Url"
        isRequired={false}
        isReadOnly={false}
        value={URL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoId,
              URL: value,
              domain,
              name,
              clientId,
              pageId,
            };
            const result = onChange(modelFields);
            value = result?.URL ?? value;
          }
          if (errors.URL?.hasError) {
            runValidationTasks("URL", value);
          }
          setURL(value);
        }}
        onBlur={() => runValidationTasks("URL", URL)}
        errorMessage={errors.URL?.errorMessage}
        hasError={errors.URL?.hasError}
        {...getOverrideProps(overrides, "URL")}
      ></TextField>
      <TextField
        label="Domain"
        isRequired={false}
        isReadOnly={false}
        value={domain}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoId,
              URL,
              domain: value,
              name,
              clientId,
              pageId,
            };
            const result = onChange(modelFields);
            value = result?.domain ?? value;
          }
          if (errors.domain?.hasError) {
            runValidationTasks("domain", value);
          }
          setDomain(value);
        }}
        onBlur={() => runValidationTasks("domain", domain)}
        errorMessage={errors.domain?.errorMessage}
        hasError={errors.domain?.hasError}
        {...getOverrideProps(overrides, "domain")}
      ></TextField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoId,
              URL,
              domain,
              name: value,
              clientId,
              pageId,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Client id"
        isRequired={false}
        isReadOnly={false}
        value={clientId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoId,
              URL,
              domain,
              name,
              clientId: value,
              pageId,
            };
            const result = onChange(modelFields);
            value = result?.clientId ?? value;
          }
          if (errors.clientId?.hasError) {
            runValidationTasks("clientId", value);
          }
          setClientId(value);
        }}
        onBlur={() => runValidationTasks("clientId", clientId)}
        errorMessage={errors.clientId?.errorMessage}
        hasError={errors.clientId?.hasError}
        {...getOverrideProps(overrides, "clientId")}
      ></TextField>
      <TextField
        label="Page id"
        isRequired={false}
        isReadOnly={false}
        value={pageId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              videoId,
              URL,
              domain,
              name,
              clientId,
              pageId: value,
            };
            const result = onChange(modelFields);
            value = result?.pageId ?? value;
          }
          if (errors.pageId?.hasError) {
            runValidationTasks("pageId", value);
          }
          setPageId(value);
        }}
        onBlur={() => runValidationTasks("pageId", pageId)}
        errorMessage={errors.pageId?.errorMessage}
        hasError={errors.pageId?.hasError}
        {...getOverrideProps(overrides, "pageId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || shareModelModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || shareModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
