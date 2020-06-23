package com.lecture.dto;

import java.util.Arrays;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Embeddable
public class Replies {

	private Integer threadID;

	private Integer userID;

	@Column(name = "ReplyText")
	private String replyText;

	@Column(name = "Attachment")
	private byte[] attachment;

	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "DateTime")
	private Date dateTime;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ReplyID")
	private Integer replyID;

	public Integer getThreadID() {
		return threadID;
	}

	public void setThreadID(Integer threadID) {
		this.threadID = threadID;
	}

	public Integer getUserID() {
		return userID;
	}

	public void setUserID(Integer userID) {
		this.userID = userID;
	}

	public String getReplyText() {
		return replyText;
	}

	public void setReplyText(String replyText) {
		this.replyText = replyText;
	}

	public byte[] getAttachment() {
		return attachment;
	}

	public void setAttachment(byte[] attachment) {
		this.attachment = attachment;
	}

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

	public Integer getReplyID() {
		return replyID;
	}

	public void setReplyID(Integer replyID) {
		this.replyID = replyID;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Replies [threadID=");
		builder.append(threadID);
		builder.append(", userID=");
		builder.append(userID);
		builder.append(", replyText=");
		builder.append(replyText);
		builder.append(", attachment=");
		builder.append(Arrays.toString(attachment));
		builder.append(", dateTime=");
		builder.append(dateTime);
		builder.append(", replyID=");
		builder.append(replyID);
		builder.append("]");
		return builder.toString();
	}

}