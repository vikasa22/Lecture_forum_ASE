package com.lecture.dto;

import java.util.Arrays;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Threads {

	private Integer userID;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ThreadID")
	private Integer threadID;

	@Column(name = "thread_summary")
	private String threadSummary;

	@Column(name = "thread_description")
	private String threadDescription;

	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer replies;

	@Column(name = "Attachment")
	private byte[] attachment;
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Date dateTime;

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

	public String getThreadSummary() {
		return threadSummary;
	}

	public void setThreadSummary(String threadSummary) {
		this.threadSummary = threadSummary;
	}

	public String getThreadDescription() {
		return threadDescription;
	}

	public void setThreadDescription(String threadDescription) {
		this.threadDescription = threadDescription;
	}

	public Integer getReplies() {
		return replies;
	}

	public void setReplies(Integer replies) {
		this.replies = replies;
	}

	public byte[] getAttachment() {
		return attachment;
	}

	public void setAttachment(byte[] attachment) {
		this.attachment = attachment;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((threadID == null) ? 0 : threadID.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Threads other = (Threads) obj;
		if (threadID == null) {
			if (other.threadID != null)
				return false;
		} else if (!threadID.equals(other.threadID))
			return false;
		return true;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Thread [threadID=");
		builder.append(threadID);
		builder.append(", userID=");
		builder.append(userID);
		builder.append(", threadSummary=");
		builder.append(threadSummary);
		builder.append(", threadDescription=");
		builder.append(threadDescription);
		builder.append(", replies=");
		builder.append(replies);
		builder.append(", attachment=");
		builder.append(Arrays.toString(attachment));
		builder.append("]");
		return builder.toString();
	}

	public Date getDateTime() {
		return dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}

}
