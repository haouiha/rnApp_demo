import React, { useState, useRef } from 'react';
import { Layout, Text, Button, Input, Icon } from '@ui-kitten/components';
import { disableAndroidBackHandler } from 'utils/disableAndroidBackHandler';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import isEqual from 'lodash/isEqual';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { login } from '../../store/actions/authActions';

const schema = yup.object().shape({
	username: yup
		.string()
		.email()
		.required(),
	password: yup.string().required(),
});

const admin = {
	password: 'admin',
	username: 'admin@gmail.com',
};

const LoginScreen = props => {
	const { navigation, login } = props;
	disableAndroidBackHandler();

	const [secureTextEntry, setSecureTextEntry] = useState(true);
	const { control, handleSubmit, errors } = useForm({ validationSchema: schema });

	const passwordRef = useRef(null);

	const onSubmit = data => {
		console.log('data', data);
		if (isEqual(data, admin)) {
			login();
		} else {
			Alert.alert('Login Failed');
		}
	};

	const toggleSecureEntry = () => {
		setSecureTextEntry(!secureTextEntry);
	};

	const renderEyeIcon = props => (
		<Icon onPress={toggleSecureEntry} {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
	);

	return (
		<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
			<Text category="h1">LoginScreen</Text>

			<Controller
				as={
					<Input
						label="Username"
						caption={errors.username?.message}
						returnKeyType="next"
						onSubmitEditing={() => passwordRef.current.focus()}
					/>
				}
				control={control}
				name="username"
				onChange={args => args[0].nativeEvent.text}
			/>
			<Controller
				as={
					<Input
						label="Password"
						ref={passwordRef}
						caption={errors.password?.message}
						secureTextEntry={secureTextEntry}
						accessoryRight={renderEyeIcon}
					/>
				}
				control={control}
				name="password"
				onChange={args => args[0].nativeEvent.text}
			/>

			<Button style={{ width: '100%', marginTop: 15 }} onPress={handleSubmit(onSubmit)}>
				Submit
			</Button>
		</Layout>
	);
};

const mapDispatchToProps = {
	login,
};

export default connect(
	null,
	mapDispatchToProps
)(LoginScreen);
